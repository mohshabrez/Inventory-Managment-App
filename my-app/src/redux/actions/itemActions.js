import { UpdateItem, addItem, deleteItem, getAllItems } from "../../services/itemServices"
import { validateItem } from "../../utils/itemsUtils"
import { SET_ITEM_TO_BE_UPDATED, ITEM_INPUT, ITEM_ERROR, ITEMS, UPDATE_ITEM, DELETE_ITEM, ITEM_LOADING, ADD_ITEM } from "../actionConstants"

export const itemInput = (userInput) => ({
    type: ITEM_INPUT,
    payload: userInput
})

export const itemToBeUpdated = (itemId) => ({
    type: SET_ITEM_TO_BE_UPDATED,
    payload: itemId
})

export const addNewItem = (itemData) => async (dispatch) => {
    try{
        dispatch({ type: ITEM_LOADING})
        const isValidated = validateItem(itemData)

        if(!isValidated){
            throw new Error('Please select all the required fields')
        }else{
            dispatch({ type: ITEM_ERROR, payload: ""})
        }
        const addedItem = await addItem(itemData)
        dispatch({ type: ADD_ITEM, payload: addedItem})
    }
    catch(error){
        dispatch({ type: ITEM_ERROR ,payload: error})
    }
}

export const updateExisitingItem = (itemId, itemData) => async (dispatch) => {
    try{
        dispatch({ type: ITEM_LOADING})

        const isValidated = validateItem(itemData);

        if(!isValidated){
            throw new Error("Please select all the required fields")
        }else{
            dispatch({ type: ITEM_ERROR, payload: ""})
        }

        const item = await UpdateItem(itemId, itemData)

        dispatch({ type: UPDATE_ITEM, payload: item})
    }
    catch(error){
        dispatch({ type: ITEM_ERROR, payload: error})
    }
}


export const getWholeItems = () => async (dispatch) => {
    try{
        dispatch({ type: ITEM_LOADING})
        const items = await getAllItems();
        dispatch({ type: ITEMS, payload: items})
    }catch(error){
        dispatch({ type: ITEM_ERROR, payload: error})
    }
}

export const removeItem = (itemId) => async (dispatch) => {
    try{
        dispatch({ type: ITEM_LOADING})

        const deletedItem = await deleteItem(itemId)

        dispatch({ type: DELETE_ITEM, payload: itemId})
    }catch(error){
        dispatch({ type: ITEM_ERROR, payload: error})
    }
}
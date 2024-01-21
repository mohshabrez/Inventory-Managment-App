import { ADD_ITEM, DELETE_ITEM, ITEMS, ITEM_ERROR, ITEM_INPUT, ITEM_LOADING, RESET_ITEM, SET_ITEM_TO_BE_UPDATED, UPDATE_ITEM } from "../actionConstants"

const initialState = {
    items: [],
    itemsInput: {
        name: "",
        category: "Others",
        quantity: 1,
        price: 0,
    },
    itemToBeUpdated: {},
    itemsLoading: false,
    itemsError: ""
}

export const itemsReducer = (state = initialState, action) => {
    switch(action.type){
        case ITEM_INPUT:
            return { ...state, itemsInput: action.payload}
        case SET_ITEM_TO_BE_UPDATED:{
            const itemId = action.payload;
            const itemFound = state.items.find(({ _id }) => _id === itemId)

            return {...state, itemToBeUpdated: itemFound}
        }
        case ITEMS:
            return {...state, items: [...action.payload], itemsLoading: false, itemsError: ""}
        case ADD_ITEM:
            return {...state, items: [...state.items, action.payload], itemsInput: {
                name: "", category: "Others", quantity: 1, price: 0
            }, itemsLoading: false}
        case UPDATE_ITEM:
            const updatedItem = action.payload;
            const updatedItems = state.items.map((item) => {
                if(item._id === updatedItem._id){
                    return updatedItem
                }
                return item
            } )
            return { ...state, items: updatedItems, itemToBeUpdated: {}, itemsInput: { name: "", category: "Others", quantity: 1, price: 0}}
        case ITEM_LOADING:
            return {...state, itemsLoading: true}
        case ITEM_ERROR:
            return { ...state, itemsError: action.payload, itemsLoading: false}
        case DELETE_ITEM:
            const itemId = action.payload;
            const deletedFilter = state.items.filter(({_id}, i) => {return _id !== itemId})
            return { ...state, items: deletedFilter}
        case RESET_ITEM:
            return {...state, itemsInput: {
                name: "", category: "Others", quantity: 1, price: 0
            }, itemToBeUpdated: {}, itemsError: ""}
        default:
            return {...state}
        }
    
}
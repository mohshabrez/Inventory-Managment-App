import { addSale, getSales } from "../../services/saleServices";
import { Validatesale } from "../../utils/saleUtils";
import { ADD_SALE, SALES, SALE_ERROR, SALE_INPUT, SALE_LOADING } from "../actionConstants";

export const saleInput = (userInput) => ({
    type: SALE_INPUT,
    payload: userInput
})

export const addNewSale = (saleData) => async (dispatch) => {
    try{
        dispatch({ type: SALE_LOADING});

        const isValidated = Validatesale(saleData)

        if(!isValidated){
            throw new Error('Please select all required fields')
        }else{
            dispatch({ type: SALE_ERROR, payload: ""})
        }

        const addedSale = await addSale(saleData)
        dispatch({ type: ADD_SALE, payload: addedSale})
    }catch(error){
        throw error
    }
}

export const getAllSales = () => async (dispatch) => {
    try{
        dispatch({ type: SALE_LOADING})

        const sales = await getSales();

        dispatch({ type: SALES, payload: sales})
    }catch(error){
        dispatch({ type: SALE_ERROR, payload: error})
    }
}
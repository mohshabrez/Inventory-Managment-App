import { ADD_SALE, RESET_SALE, SALES, SALE_ERROR, SALE_INPUT, SALE_LOADING } from "../actionConstants"

const initialState = {
    sales: [],
    salesInput: {
        description: "",
        quantity: 1,
        price: 0,
        item: ""
    },
    salesLoading: false,
    salesError: ""
}

export const salesReducer = (state = initialState, action) => {
    switch(action.type){
        case SALE_INPUT:
            return {...state, salesInput: action.payload}
        case SALES:
            return {...state, sales: [...action.payload], salesLoading: false, salesError: ""}
        case ADD_SALE:
            return {
                ...state,
                sales: [...state.sales, action.payload],
                salesInput: {
                  description: "",
                  quantity: 1,
                  price: 0,
                  item: "",
                },
                salesLoading: false,
              };
        case SALE_LOADING:
            return {...state, salesLoading: true}
        case SALE_ERROR:
            return {...state, salesError: action.payload, salesLoading: false}
        case RESET_SALE:
            return {...state, salesInput: {
                description: "",
                quantity: 1,
                price: 0,
                item: ""
            },salesError: ""}
        default:
            return {...state}
    }
}
import { combineReducers } from "redux";
import { itemsReducer } from "./itemsReducer";
import { salesReducer } from "./salesReducer";

export const rootReducer = combineReducers({
    itemState: itemsReducer,
    saleState: salesReducer
})
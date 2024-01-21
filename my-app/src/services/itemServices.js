import axios from "axios";
import { BASE_URL } from "../redux/actionConstants";

export const addItem = async (itemsData) => {
    try{
        const response = await axios.post(`${BASE_URL}/items`, {
            ...itemsData
        },{
            headers:{
                "Content-Type":"application/json",

            }
        })
        const {addedItem} = response.data;
        console.log(addedItem)
        return addedItem
    }
    catch(error){
        throw error
    }
}

export const UpdateItem = async (itemId, itemData) => {
    try{
        const response = await axios.post(`${BASE_URL}/items/${itemId}`, {
            ...itemData
        },{
            headers:{
                "Content-Type": "application/json"
            }
        })
        const data = response.data
        return data;
    }
    catch(error){
        throw error
    }
}

export const getAllItems = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/items`,{
            headers:{
                "Content-Type":"application/json",

            }
        })
        const data = response.data
        return data
    }
    catch(error){
        throw error
    }
}

export const deleteItem =  async (itemId) => {
    try{
        const response = await axios.delete(`${BASE_URL}/items/${itemId}`)

        const {deletedItem} = response.data
        return deletedItem
    }
    catch (error){
        throw error
    }
}

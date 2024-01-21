import axios from "axios"
import { BASE_URL } from "../redux/actionConstants"

export const addSale = async (saleData) => {
    try{
        const response = await axios.post(`${BASE_URL}/sales`, {
            ...saleData
        },{
            headers:{
                "Content-Type": "application/json"
            }
        }) 
        const addedSale = response.data
        return addedSale
    }
    catch(error){
        throw error
    }
}

export const getSales = async () => {
    try{
        const response = await axios.get(`${BASE_URL}/items`,{
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

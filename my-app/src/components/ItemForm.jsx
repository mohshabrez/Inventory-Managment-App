import { useDispatch, useSelector } from "react-redux"
import { addNewItem, itemInput, updateExisitingItem } from "../redux/actions/itemActions"
import { CategoryItems } from "../utils/itemsUtils"
import { useEffect } from "react"
import { RESET_ITEM } from "../redux/actionConstants"

export const ItemForm = () => {
    const error = useSelector((state) => state?.itemState?.itemsError)
    const userInput = useSelector((state) => state?.itemState?.itemsInput)
    const itemToBeUpdated = useSelector((state) => state?.itemState?.itemToBeUpdated)
    const dispatch = useDispatch()

    useEffect(() => {
        if(itemToBeUpdated?._id){
            dispatch(itemInput({ ...itemToBeUpdated}))
        }
    },[itemToBeUpdated])

    useEffect(() => {
        return function (){
            dispatch({ type: RESET_ITEM})
        }
    }, [])
    
    const handleAddOrUpdate = () => {
        if(itemToBeUpdated?._id){
            dispatch(updateExisitingItem(itemToBeUpdated?._id, userInput))
        }else{
            dispatch(addNewItem(userInput))
        }
    }

    return(
        <div>
            <h2>Add a new Item:</h2>
            <div className="flex gap-2 flex-wrap mt-2">
                <label className="flex flex-col">
                    Name: 
                    <input onChange={(e) => 
                     dispatch(itemInput({
                        ...userInput, name: e.target.value
                     }))
                    } value={userInput.name} type="text" placeholder="Enter Item Name" className="bg-gradient-to-r from-orange-700 to-red-500 text-white text-transparent bg-clip-text border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"/>
                </label>
                <label className="flex flex-col">
                    Category: 
                    <select
                    onChange={(e) => 
                        dispatch(itemInput({
                           ...userInput, category: e.target.value
                        }))
                       } value={userInput.category} className="bg-gradient-to-r from-orange-700 to-red-500 text-transparent bg-clip-text text-white border-2 outline-blue-500 rounded-md h-max self-end px-2">
                        {CategoryItems.map((category) => {
                            return(
                                <option key={category} className="bg-blue-600">
                                    {category}
                                </option>
                            )
                        })}
                    </select>
                </label>
                <label className="flex flex-col">
                    Quantity: 
                    <input onChange={(e) => 
                     dispatch(itemInput({
                        ...userInput, quantity: e.target.value
                     }))
                    } value={userInput.quantity} type="number" placeholder="Enter Quantity" className="bg-gradient-to-r from-orange-700 to-red-500 text-transparent bg-clip-text text-white border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"/>
                </label>
                <label className="flex flex-col">
                    Price: 
                    <input onChange={(e) => 
                     dispatch(itemInput({
                        ...userInput, price: e.target.value
                     }))
                    } value={userInput.price} type="number" placeholder="Enter Price" className="bg-gradient-to-r from-orange-700 to-red-500 text-transparent bg-clip-text text-white border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"/>
                </label>
                <button onClick={handleAddOrUpdate} className="bg-blue-500 text-white px-4 py-0.5 rounded-md hover:shadow-lg h-max self-end">
                       {itemToBeUpdated._id ? "Update": "Add"} 
                </button>
            </div>
            {error && <small className="text-red-600">{`* ${error}`}</small>}
        </div>
    )
}
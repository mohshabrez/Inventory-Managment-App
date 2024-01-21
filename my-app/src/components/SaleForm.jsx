import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RESET_SALE } from "../redux/actionConstants"
import { addNewSale, saleInput } from "../redux/actions/saleActions"

export const SaleForm = () => {
    const items = useSelector((state) => state.itemState.items)
    const error = useSelector((state) => state.saleState.salesError)
    const userInput = useSelector((state) => state.saleState.salesInput)
    const dispatch = useDispatch()

    const availableItems = items?.reduce((acc,curr) => {
        acc = [...acc, {name: curr?.name, _id: curr?._id}]
        return acc;
    },
    [{ name: "Select Item", _id: "-1"}]
    )

    useEffect(() => {
        return function (){
            dispatch({ type: RESET_SALE})
        }
    }, [])

    const handleAddSale = () => {
        dispatch(addNewSale(userInput))
    }

    return(
        <div>
            <h2>Add a New Sale: </h2>
            <div className="flex gap-2 flex-wrap mt-2">
                <label className="flex flex-col">
                    Item:
                    <select onChange={(e) => {
                        dispatch(saleInput({
                            ...userInput, item: e.target.value
                        }))
                    }} value={userInput.item} className="bg-gray-800 text-white border-2 outline-2 outline-blue-500 rounded-md h-max self-end px-2">
                        {availableItems.map((item) => {
                            return(
                                <option key={item._id} value={item._id} className="bg-gray-800">
                                    {item.name}
                                </option>
                            )
                        })}
                    </select>
                </label>
                <label className="flex flex-col">
                        Description:
                        <input onChange={(e) => dispatch(
                            saleInput({
                                ...userInput, description: e.target.value
                            })
                        )} value={userInput.description} type="text" placeholder="Enter Description" className="bg-gray-800 text-white border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"/>
                </label>
                <label className="flex flex-col">
          Quantity:
          <input
            onChange={(e) =>
              dispatch(
                saleInput({
                  ...userInput,
                  quantity: e.target.value,
                })
              )
            }
            value={userInput.quantity}
            type="number"
            placeholder="enter quantity"
            className="bg-gray-800 text-white border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"
          />
        </label>

        <label className="flex flex-col">
          Price:
          <input
            onChange={(e) =>
              dispatch(
                saleInput({
                  ...userInput,
                  price: e.target.value,
                })
              )
            }
            value={userInput.price}
            type="number"
            placeholder="enter price"
            className="bg-gray-800 text-white border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"
          />
        </label>

        <button
          onClick={handleAddSale}
          className="bg-blue-500 text-white px-4 py-0.5 rounded-md hover:shadow-lg h-max self-end"
        >
          Add
        </button>
            </div>
            {error && <small className="text-red-600">{`* ${error}`}</small>}
        </div>
    )

}
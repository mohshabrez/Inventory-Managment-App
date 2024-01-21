import { Item } from '../model/item.model.js'

const getAllItems = async (req, res) => {
  try {
    const getItems = await Item.find({})
    return res.status(200).json(getItems)
  }
  catch (error) {
    return res.status(500).json({ message: 'Error occured while fetching the Items', error: error })
  }
}   

const addItem = async (req, res) => {
  try {
    const itemData = req.body
    if (itemData) {
      const newItem = new Item(itemData)
      const saveItem = await newItem.save()
      console.log(saveItem)
      return res.status(200).json(saveItem)
    }
    else {
      return res.status(401).json({ message: 'Please enter the request body data' })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error occured while adding Item', error })
  }
}


const deleteItem = async (req, res) => {
  try {
    const Id = req.params.itemId
    if (Id) {
      const deletedItem = await Item.findByIdAndDelete(Id)
      return res.status(200).json(deletedItem)
    }
    else {
      return res.status(401).json({ message: 'Please enter the Id to be deleted' })
    }
  }
  catch (error) {
    return res.status(500).json({ message: 'Error occured while deleting Item', error })
  }
}


const UpdateItem = async (req, res) => {
  try {
    const updatedItem = req.body;
    const itemToBeUpdated = req.params.itemId
    if (updatedItem && itemToBeUpdated) {
      const updatedTheItems = await Item.findByIdAndUpdate(itemToBeUpdated, updatedItem, { new: true });
      return res.status(200).json(updatedTheItems)
    }
    else {
      return res.status(400).json({ message: 'Missing the Id and the body to be updated' })
    }
  }
  catch (error) {
    return res.status(500).json({ message: 'Error occured while updating the Item', error })
  }
}


export { getAllItems, addItem, deleteItem, UpdateItem }
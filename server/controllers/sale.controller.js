import mongoose from 'mongoose';
import { Sale } from '../model/sale.model.js';

const getAllSales = async (req, res) => {
  try {
    const allSales = await Sale.find({})
    if (allSales) {
      return res.status(200).json(allSales)
    }
    else {
      return res.status(400).json({ message: 'Data of sales is unavailable' })
    }
  }
  catch (error) {
    res.status(500).json({ message: 'Error occured while getting all sales', error: error })
  }
}

const addSales = async (req, res) => {
  try {
    const newSale = req.body;
    if (newSale) {
      const saleAdded = new Sale(newSale);
      const addedSale = await saleAdded.save()
      return res.status(200).json(addedSale);
    } else {
      return res.status(400).json({ message: 'Body data is unavailable' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error occured while adding the new sale', error: error })
  }
}

export { getAllSales, addSales }

import express from 'express';
const router = express.Router();
import { getAllItems, addItem, deleteItem, UpdateItem } from '../controllers/item.controller.js';

router.route('/').get(getAllItems).post(addItem);

router.delete('/:itemId', deleteItem);

router.post('/:itemId', UpdateItem)

export default router;

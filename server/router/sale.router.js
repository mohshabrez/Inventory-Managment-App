import express from 'express';
const router = express.Router();
import { getAllSales,addSales } from '../controllers/sale.controller.js';

router.route('/').get(getAllSales).post(addSales);


export default router;
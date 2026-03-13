import express from "express";
import { placeOrder } from "../controllers/orderController.js";
const orderRouter = express.Router();
orderRouter.post("/",placeOrder);
//orderRouter.post("/edit",updateOrder);

export default orderRouter;
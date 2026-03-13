import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    email: {type: String, required: true},
    items: {type: Array , required: true},
    OrderValue: {type: Number, required: true},
    status: {type: String, default: "Pending"},
    date: {type: Date, default: Date.now()}

});
const orderModel = mongoose.model("orders",orderSchema);
export default orderModel;
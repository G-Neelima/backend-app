import orderModel from "../models/orderModel.js";

const placeOrder = async (req, res)=>{
    try{
         const newOrder = new orderModel({
      email: req.body.email,
      items: req.body.items,
      OrderValue: req.body.OrderValue,
      status: req.body.status,
      date: req.body.date
    });

    await newOrder.save();

    res.json({
      success: true,
      message: "Order stored in database"
    });

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error storing order"
    });
  }
};

export {placeOrder};
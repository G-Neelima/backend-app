// import mongoose from "mongoose";

// //definethe schema
// const productSchema=mongoose.Schema({
//     name: {type: String, required: true},
//     price:{type: Number, required: true},
//     desc:{  type: String, required: true},
//     imageUrl: {type: String },
   
// });

// //creates the model
// const productModel= mongoose.model("products",productSchema)
// export default productModel;
// // const productModel=[
// //     {id:1,name:"Product1",price:100},
// //     {id:2,name:"Product2",price:150},
// //     {id:3,name:"Product3",price:120},
// // ];

import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
});
const productModel = mongoose.model("products", productSchema);
export default productModel;
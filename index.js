// import express from "express"
// import expresLayouts from "express-ejs-layouts"
// import session from "express-session"
// import {productRouter} from "./routes/productRoute.js"
// import {userRouter} from "./routers/userRouter.js"

// const app = express()
// app.set("view engine","ejs")
// app.set("views","views")
// app.use(expresLayouts)
// app.use(express.urlencoded({extended:true}))
// app.use(express.static("public"))

// app.use(session({
//     secret:"mySecretKey",
//     resave:false,
//     saveUninitialized:false,
// }));
// app.get("/",(req,res)=>{
//     res.render("home");
// })

// app.use("/products",productRouter)
// app.use("/users",userRouter)
// app.listen(5000,()=>{
//     console.log("server started")
// })
import express from "express";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";
import dotenv from "dotenv";
import productRouter from "./routes/productRoute.js";
import { storeRouter } from "./routes/storeRoute.js";
import mongoose from "mongoose";
import dbConnect from "./config/db.js";
const app = express();
dotenv.config()
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "views");
app.set("layout","layout")
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use("/", storeRouter);
// app.use("/auth", authRouter);
app.use("/products", productRouter);
// app.use("/users", userRouter);


const startServer = async () =>{
  await dbConnect();
  app.listen(5000, () => {
  console.log("Server Started");
});
}
startServer()
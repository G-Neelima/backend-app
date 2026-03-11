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
import cors from "cors";
import homeRouter from "./routes/homeRoute.js";
import productRouter from "./routes/productRoute.js";
import storeRouter from "./routes/storeRoute.js";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";
import mongoose from "mongoose";
import dbConnect from "./config/db.js";
import { authenticateAdmin } from "./middleware/auth.js";
const app = express();
dotenv.config()
app.use(cors());
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

app.use((req,res,next)=>{
  res.locals.user = req.session.user;
  next();
});

app.use("/auth", authRouter);
app.use("/store", storeRouter);
app.use("/",authenticateAdmin,homeRouter)
app.use("/products",authenticateAdmin, productRouter);
app.use("/users",authenticateAdmin, userRouter);


const startServer = async () =>{
  await dbConnect();
  app.listen(5000, () => {
  console.log("Server Started");
});
}
startServer()
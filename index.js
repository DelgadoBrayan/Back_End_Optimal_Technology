import express from "express";
import cors from "cors";
import { config } from "dotenv";
import routerProduct from "./src/routes/product.route.js";
import connectDB from "./src/Config/connetionDB.js";
config()
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PATCH', 'PUT' ,'DELETE', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
connectDB()
app.options('*', cors());


app.use(express.json());
app.use('/api',routerProduct)
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));
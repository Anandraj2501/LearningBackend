import express from 'express';
import userRoutes from './routes/users.routes.js';
import productRoutes from "./routes/products.routes.js";
import addrequestTime from './middlewares/requestTime.middleware.js';
import Logger from './middlewares/logger.middleare.js';
import errorHandler from './middlewares/errorHandler.middleware.js';

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies





app.use(addrequestTime);
app.use(Logger);

app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.use("/api", userRoutes);

app.use("/api",productRoutes);

app.use(errorHandler);
app.listen(8000, ()=>{
    console.log('Server is running on port 8000');
});


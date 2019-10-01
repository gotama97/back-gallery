import express from "express"
import morgan from "morgan";
import path from "path";
import cors from "cors";

import indexRoutes from "./routes/index";

const app=express();

//settings
app.set('port',process.env.PORT || 4000);

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//routes
app.use('/api',indexRoutes);

//this folder for this application will be used to store úblic files 
app.use('/uploads',express.static(path.resolve('uploads')));

export default app;
import dotenv from 'dotenv';dotenv.config({path:'../.env'});dotenv.config();import app from './app.js';import {connectDatabase} from './config/db.js';
const port=Number(process.env.PORT)||5000;
if(process.env.MONGODB_URI){try{await connectDatabase();}catch(err){console.error(`MongoDB connection unavailable: ${err.message}`);}}
app.listen(port,()=>console.log(`AI Mystery Room API listening on ${port}`));

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
       const connectionIstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
       console.log(`\n mongodb connected !! DB HOST : ${connectionIstance.connection.host}`)
    } catch (error) {
        console.log("Error connecting DB ",error);
        process.exit(1);
    }
}

export default connectDB
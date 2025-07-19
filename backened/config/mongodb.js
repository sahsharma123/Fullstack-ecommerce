import mongoose from "mongoose";

const connectDB =async()=>{

    mongoose.connection.on('connected',()=>{
        console.log("DB Connected")
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
    // maybe /e-commerce wrong
}
export default connectDB;
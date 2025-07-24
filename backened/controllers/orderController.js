import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js';
import mongoose from 'mongoose';

// placing order using COD method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId: new mongoose.Types.ObjectId(userId),
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({ success: true, message: "Order placed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


//placing order using Stripe method
const placeOrderStripe =async (req,res) =>{
    
}

//placing order using Razorpay method
const placeOrderRazorpay =async (req,res) =>{
    
}

// All orders data for Admin Panel
const allOrders =async (req,res) =>{

}

//User Order Data For Frontend
const userOrders =async (req,res)=>{
    try {
        const {userId} =req.body

        const orders =await orderModel.find({userId})
        res.json({success:true,orders})
    } catch (error) {
         console.log(error);
        res.json({success:false,message:error.message})
    }
}

//update order status from Admin Panel
const updateStatus =async (req,res)=>{

}

export {placeOrder,placeOrderStripe,placeOrderRazorpay,userOrders,allOrders,updateStatus}
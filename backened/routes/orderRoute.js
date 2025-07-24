import express from 'express'
import {placeOrder,placeOrderStripe,placeOrderRazorpay,userOrders,allOrders,updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter =express.Router()

//this route is for admin panel we get all order detail
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// payment features
orderRouter.post('/place',authUser,placeOrder)//cod
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

//User Feature
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter
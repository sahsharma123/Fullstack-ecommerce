import React from 'react'
import { useEffect ,useState} from 'react'
import axios from 'axios'
import {backendUrl, currency} from '../App.jsx'
import { toast } from 'react-toastify'
import { assets } from '../assets/admin_assets/assets.js'
const Orders = ({token}) => {
  const [orders,setOrders] =useState([])

  const fetchAllOrders =async ()=>{
    if(!token){
      return null;
    }

    try {
      console.log("Token being used:", token);
      const response = await axios.post(backendUrl + '/api/order/list',{},{headers:{token}})
        if (response.data.success) {
      setOrders(response.data.orders.reverse());
      console.log("Fetched Orders:", response.data.orders); 
    } else {
      toast.error(response.data.message)
      
    }
      
    } catch (error) {
      toast.error(error.message)
    }
  }
  const statusHandler =async ( event,orderId)=>{
    try {
      const response =await axios.post(backendUrl + '/api/order/status' , {orderId,status:event.target.value},{headers:{token}})
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message)
    }
  }
  useEffect(()=>{
    fetchAllOrders()
  },[token])

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {
          orders.map((order,index)=>(
            <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index}>
              <img className='w-12' src={assets.parcel_icon} alt="" />
              <div>
              <div>
                {order.items.map((item,index)=>{
                  if (index === order.items.length-1) {
                    return <p className='py-0.5' key={index}>{item.name} x {item.quantity} <span>{item.size}</span></p>
                  }else{
                    return <p className='py-0.5' key={index}>{item.name} x {item.quantity} <span>{item.size}</span> ,</p>
                  }
                })}
              </div>
              <p className='font-mediummt-3 mb-2'>{order.address.firstName + " " + order.lastName}</p>
              <div>
                <p>{order.address.street + ", "}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country+ ", " + order.address.zipcode}</p>
              </div>
              <p>{order.address.phone}</p>
            </div>
                <div>
                  <p className='text-sm sm:text-[15px]'>Items : {order.items.length}</p>
                  <p className='mt-3'>Method : {order.paymentMethod}</p>
                  <p>Payment : {order.payment ? 'Done' :'Pending'}</p>
                  <p>Date : {new Date(order.date).toLocaleDateString()}</p>
                </div>
                <p className='text-sm sm:text-[15px]'>{currency} {order.amount}</p>
                <select onChange={(event)=>statusHandler(event,order._id)} className='p-2 font-semibold' value={order.status}>
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders

import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudnary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'

// App Config

const app =express()
const port =process.env.PORT || 4000
connectDB()
connectCloudnary()
// middlewares
app.use(express.json())// whtever req we get parsed in json
app.use(cors()) //now we can access backened from any ip

//api endpoint
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)

app.get('/',(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>console.log('server started on PORT: '+ port))
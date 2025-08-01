import jwt from 'jsonwebtoken'


//auth user when user  add product in cart or update the cart or place the order
// convert user token in user id

const authUser =async (req,res,next)=>{
    const {token }=req.headers;
    if(!token){
        return  res.json({success: false, message: 'Not Authorized login again'})
    }
    try {
        const token_decode=jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId =token_decode.id//add userId property in body 
        next()
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export default authUser
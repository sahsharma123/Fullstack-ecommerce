import jwt from "jsonwebtoken"

const adminAuth =async(req,res,next)=>{
    try {
            console.log("[adminAuth] req.headers:", req.headers);
            console.log("[adminAuth] token header:", req.headers.token);


        const {token} = req.headers
        if(!token){
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);

        // doubt in this if statement
       if (token_decode.email !== process.env.ADMIN_EMAIL) {
            return res.json({ success: false, message: "Not Authorized Login Again" });
        }
        next()
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export default adminAuth
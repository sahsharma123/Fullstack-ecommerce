import jwt from "jsonwebtoken"

const adminAuth = async(req, res, next) => {
    try {
        const {token} = req.headers
        if(!token){
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
        // Debug logs to see the exact values
        console.log("Decoded token:", JSON.stringify(token_decode));
        console.log("ADMIN_EMAIL:", JSON.stringify(process.env.ADMIN_EMAIL));
        console.log("ADMIN_PASSWORD:", JSON.stringify(process.env.ADMIN_PASSWORD));
        console.log("Expected:", JSON.stringify(process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD));
        
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Not Authorized Login Again" });
        }
        
        next()
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Not Authorized Login Again"})
    }
}

export default adminAuth
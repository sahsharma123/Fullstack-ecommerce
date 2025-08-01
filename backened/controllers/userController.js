import validator from "validator";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";


const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//Route for user login
const loginUser =async (req,res)=>{
    try {
        const {email,password} =req.body;

        const user =await userModel.findOne({email});

        if(!user){
            return res.json({success:false,message: "User does not exists"})
        }

        const isMatch =await bcrypt.compare(password,user.password);
        if(isMatch){

            const token =createToken(user._id)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message: 'Invalid credentials'})
        }

    } catch (error) {
        console.log(error);
    res.json({success:false,message:error.message})
    }
}

//Route for user register
const registerUser =async(req,res)=>{
  try {
    const {name, email ,password}=req.body;

    //check user alresdy exists or not
    const exists =await userModel.findOne({email});
    if(exists){
        return res.json({success:false,message: "User alreagy exists"})
    }

        //validting email formate and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message: "please enter valid email"})
        }

        if(password.length < 8){
            return res.json({success:false,message: "Please enter Strong password"})
        }
        //hased the user password using bycrypt
        const salt = await bcrypt.genSalt(10)
        const hashedPassword =await bcrypt.hash(password,salt)

        const newUser =new userModel({
            name,
            email,
            password:hashedPassword
        })
        //store new user in db
        const user =await newUser.save()
        //generate token
        const token = createToken(user._id)
        res.json({success:true,token})

    
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }

}

// Route for Adim login
const adminLogin =async(req,res)=>{
    try {
        const {email,password} =req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token =jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }else{
            
    res.json({success:false,message:"Invalid credentials"})
        }
    } catch (error) {
        console.log(error);
    res.json({success:false,message:error.message})
    }
}

export {loginUser,registerUser,adminLogin}
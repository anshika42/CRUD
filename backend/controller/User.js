const User = require("../models/Schema");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const registerUser = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        if(!name || !email|| !password)
            {
                return res.status(400).json({errorMessage:"Bad Request"});
            }
        const isExistingUser = await User.findOne({email:email});
        if(isExistingUser)
            {
                return res.status(409).json({errorMessage: "user already exist"});

            }
//encryption
        const hashedPassword =  await bcrypt.hash(password,10);
            const userData = new User({
                name,email,
                password: hashedPassword
            })
            await userData.save();
            res.json({message :"User registered Successfully"});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({errorMessage: "Something went wrong"});
    }
}

const loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password)
            {
                return res.staus(400).json({
                    errorMessage:"Bad Request: Invalid credentials"
                })
            }

        const userDetail = await User.findOne({email});
        if(!userDetail)
            {
                return res.status(401).json({errorMessage:"Invalid Credentials"});
            }  
        const passwordMatch = await bcrypt.compare(password,userDetail.password);
        if(!passwordMatch)
            {
                return res.status(401).json({
                    errorMessage:"Invalid Credentials"
                })
            }
            //authorisation
            const token = jwt.sign({userId : userDetail._id ,name : userDetail.name},'shhhhh',{expiresIn :"60s"});
          res.json({message: "User Logged In" , token:token , name: userDetail.name}) ;  
    }
    catch(err){
        console.log(err);
        res.status(500).json({errorMessage:"something went wrong"});
    }
}
module.exports = {registerUser,loginUser};
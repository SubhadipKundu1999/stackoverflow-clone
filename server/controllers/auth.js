import jwt from "jsonwebtoken";
import axios from 'axios';
import bcrypt from "bcryptjs";
import users from "../model/authModel.js";
import Crypto from "crypto"
import {createTransport} from "nodemailer"

const sendEmail = async (to, subject, message)=>{


    // testing

// var transporter = createTransport({
//     host: process.env.SMPT_HOST,
//     port:process.env.SMPT_PORT ,
//     auth: {
//       user: process.env.SMPT_USER,
//       pass: process.env.SMPT_PASS,
//     },
//   });

// await transporter.sendMail({
//     to,
//     subject, 
//     text,
//     from :"subhadipkundu1000@gmail.com",
// });

/* send mail actually*/

const transport =createTransport({
    service:'gmail',
    auth:{
        user: process.env.AUTH_USER_EMAIL,
        pass:process.env.AUTH_USER_PASS,
    }
})

const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to,
    subject,
    html:message
}

await transport.sendMail(mailOptions, (error,info)=>{
    if(error) return console.log(error.message);

    console.log('Mail send successfully')
})


}


// sign up
export const signup = async (req, res) => {
    if (req.body.googleAccessToken) {
        const {googleAccessToken} = req.body;
        console.log(googleAccessToken);

        axios
            .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                "Authorization": `Bearer ${googleAccessToken}`
            }
        })
            .then(async response => {
                const name = response.data.name;
                const email = response.data.email;
                const avatar = response.data.picture;

                const existingUser = await users.findOne({email})
                console.log(existingUser);
                if (existingUser) 
                    return res.status(400).json({message: "User already exist!"})

                const newUser = await users.create({name, email, password:"12345", avatar})

                const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET,{ expiresIn: '1h' });
                res
                    .status(200)
                    .json({result:newUser, token})
            })
            .catch(err => {
                console.log(err)
                res
                    .status(400)
                    .json({message: "Invalid access token!"})
            })

    }

    else{
        const { name, email, password } = req.body;
    try {
        const existinguser = await users.findOne({ email });
        if (existinguser) {
            return res.status(404).json({ message: "User already Exist." });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await users.create({
            name,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET,{ expiresIn: '1h' });
        res.status(200).json({ result: newUser, token });
    } catch (error) {
        console.log(error);
        res.status(500).json("Something went worng...");
    }
    }
    
};

// log in

export const login = async (req, res) => {
    if(req.body.googleAccessToken){
        // gogole-auth
        const {googleAccessToken} = req.body;

        axios
            .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                "Authorization": `Bearer ${googleAccessToken}`
            }
        })
            .then(async response => {
              
                name:response.data.name
                const email = response.data.email;
                const avatar = response.data.picture;

                const existingUser = await users.findOne({email})

                if (!existingUser) 
                return res.status(404).json({message: "User don't exist!"})

                const token = jwt.sign({ email: existingUser.email }, process.env.JWT_SECRET,{ expiresIn: '1h' });
        
                res
                    .status(200)
                    .json({result: existingUser, token})
                    
            })
            .catch(err => {
                console.log(err);
                res
                    .status(400)
                    .json({err: err.data, message: "Invalid access token!"})
            })
}
    else{
    const { email, password } = req.body;
    try {
        const existinguser = await users.findOne({ email });
        if (!existinguser) {
            return res.status(404).json({ message: "User don't Exist." });
        }
        const isPasswordCrt = await bcrypt.compare(password, existinguser.password);
        if (!isPasswordCrt) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ email: existinguser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ result: existinguser, token });
    } catch (error) {
        res.status(500).json("Something went worng...");
    }

}
};


// forgot password

export const forgotPassword= async (req,res)=>{
    
    //catch email from request object
    const {email}= req.body

    try{

        // check user is exist or not
        const user = await users.findOne({ email:email });
        if (!user){
            return res.status(404).json({ message: "User don't Exist." });
        }

        // generate token and save to db
        const resetToken = Crypto.randomBytes(20).toString("hex");
        const token = Crypto
                    .createHash("sha256")
                    .update(resetToken)
                    .digest("hex");
        await users.updateOne({email:email},{$set:{resetPasswordToken:token, resetPasswordExpire:Date.now()+15*60*1000}});
       
        // send via email
        const url = `${process.env.FRONTEND_URL}Auth/resetPassword/${resetToken}`
        const message =
        `<p>Hello,</p>
        <p>You have requested to reset your password. To complete the password reset process, please click the button below within the next 5 minutes:</p>
    
        <a href= ${url}>
            <button style="background-color: #007BFF; color: #fff; padding: 10px 20px; border: none; cursor: pointer;">Reset Your Password</button>
        </a>
    
        <p>If you did not request a password reset, please disregard this message. Your account's security is important to us.</p>
    
        <p>This link will expire in 5 minutes, so be sure to use it promptly.</p>
    
        <p>Thank you for using our service!</p>`
        await sendEmail(user.email, "S-stack-overflow Reset Password", message);

        // send message to client
        res.status(200).json({
            success:true,
            message:`Reset Token has been sent to ${user.email}`,
        })
       
    }  
      catch(error){
        res.status(405).json({message:error.message, error:"error"});
    }

}

export const resetPassword= async (req,res)=>{

    const {token} = req.params;
    const {password} = req.body;


    try{

     const resetPasswordToken = Crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");

      const user = await users.findOne({
        resetPasswordToken,
        resetPasswordExpire:{
        $gt:Date.now()
        },
      });
      if(!user)  return res.status(401).json({ message: "TOken is invalid or has been expired" });
      const hashedPassword = await bcrypt.hash(password, 10);
       
      await users.updateOne({resetPasswordToken:resetPasswordToken},{$set:{ password:hashedPassword, resetPasswordToken:undefined, resetPasswordExpire:undefined}});
       
       res.status(200).json({
        success:true,
        message:"Password Change successfully"
       })
            }
            catch(error){
           res.status(405).json({message:error.message});
            }             



}
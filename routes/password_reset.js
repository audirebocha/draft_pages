const express=require('express')
const router=express.Router()
router.use(express.json())
const bodyParser = require('body-parser')
const mongoose=require('mongoose')
const User=require('../models/user')
const sg_mail= require('@sendgrid/mail')


const API_key="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";
sg_mail.setApiKey(API_key)


router.use(express.static('../assets'))

// create application/json parser
const jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })



async function db_connect(){
    uri="mongodb+srv://root:123@cluster0.u5atqck.mongodb.net/sharespace?retryWrites=true&w=majority"
    try{
        await mongoose.connect(uri);
        console.log('Connected to Mongo DB at password reset');
    }catch(error){
        console.error(error)
    }
}
db_connect()


//*********************************************************************************************************** */
router.get('/',(req,res)=>{
    res.render('reset_password1')
})

router.post('/email',urlencodedParser,async (req,res)=>{
    //Check if email exists in the database
    var email=req.body.email;
    result = await User.find({email:email})
    //if it exists, generate a reset_code and send an email with it
    if(result){
        var reset_code=gen_reset_code()
        await User.findOneAndUpdate({'email':email},{'reset_code':reset_code, 'reset_code_timestamp':Date.now()})
        send_reset_email(email, reset_code)
        req.session.email=email;
        req.session.reset_code=reset_code
        res.redirect('/reset_password_reset_code')
        //res.json({body:req.body,params:req.params})
    }else{
        res.json({status:'failed', message:'the email is not registered with us, sign up to continue'})
    }
    //Store the reset code in the database, with the timestamp
    //If it doesnt exist send an error message
    //
    //
})


router.post('/reset_code',urlencodedParser, async (req,res)=>{
    //Check if email exists in the database
    var email=req.session.email
    result = await User.find({email:email})
	console.log(result)
    if(result){
	var reset_code=result[0]['reset_code']
        //Compare time , reset code and send reset form
        if(req.session.reset_code===reset_code){

            res.redirect('/reset_password_reset_form')
        }else{
            res.json({status: 'failed', message: 'This reset password doesnt match with the one given'})
        }
    }else{
        res.json({status:'failed', message:'Please sign up first'})
    }
})


router.post('/reset_password',urlencodedParser,async (req,res)=>{
    //Check if email exists in the database
    var password=req.body.password;
    var confirmed_password=req.body.password;
    email=req.session.email
    result = await User.find({email:email})
    //if it exists, generate a reset_code and send an email with it
    console.log(password)
    if(result){
        //Compare time , reset code and send reset form
        if(password===confirmed_password){
            await User.findOneAndUpdate({'email':email},{'password':password})
            //res.json({status: 'success',message:'your password has been successfully changed'})
		res.redirect('/reset_password_reset_success')
        }else{
            res.json({status: 'failed', message: 'password and confirmed password dont match'})
        }
    }else{
        res.json({status:'failed', message:'please repeat the password reset process????'})
    }
})






function send_reset_email(recipient, reset_code){
    //You will need to hash the email before you send the link
    var API_key="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";
    sg_mail.setApiKey(API_key)
    console.log("Sending message to "+recipient+"...")
    var body="Hi, Welcome to sharespace, we are very excited to have you and are eager to help you find the place that suites you"
    var html=`
        <center>
        <div style='color:white; background-color:#003B95'>
            <h1>Sharespace</h1>
            <h2>Reset Password</h2>
            <p>Your reset code is:</p>
            <h1>`+ reset_code +`</h1>
            <h3>Proceed reset your password using this code</h3>
        </div>
        </center>
        `

    msg={
        to: recipient,
        from: 'audire.usher@gmail.com',
        subject: "Sharespace Password Reset",
        text:body,
        html: html
    }

    sg_mail.send(msg)
    .then(response=> {
        console.log('Email sent...')
        return true;
    })
    .catch(error => {
        console.log(error.message)
        return false;
    })
}


function gen_reset_code(){
    var random_string=Math.random().toString(36).toUpperCase().split('.')[1];
    return random_string;
}


module.exports=router

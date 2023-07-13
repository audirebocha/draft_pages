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
        console.log('Connected to Mongo DB');
    }catch(error){
        console.error(error)
    }
}
db_connect()


//*********************************************************************************************************** */
router.post('/',(req,res)=>{
    res.json({data:req.body,params:req.params})
})

router.post('/data',(req,res)=>{
    res.json({data:req.body})
})

router.get('/activate_account/:email',async (req,res)=>{
    console.log("Activating new user email:",req.params.email)
    var email=req.params.email
    //Check if the user's email is in the database
    result = await User.find({email:email})
    if(result){
        await User.findOneAndUpdate({'email':email},{'verified':true})
        //User.save()
        res.json({status:result})
    }else{
        res.json({one:'one'})
    }
    //res.send(req.params.email)
})

router.post('/new', urlencodedParser,async (req, res) => {
    const { username, email, password } = req.body;
    // Log the form data to the console
    console.log({"Username": username,"Email": email,"Password": password});
    //Check if the user is in the database and has already used this email
    result = await User.find({email:email})
    if(result.length){
        res.json({status:'failed',message:'You already used this email'})
    }else{
        // Insert data to the database
        const new_user= new User({
            username:username,
            email:email,
            password:password
        })
        new_user.save()
        // Generate email to send and verify 
        send_activation_email(email)
        // Send a response to the client if all is successful
        res.redirect('/welcome')
    }
  });




function send_activation_email(recipient){
    //You will need to hash the email before you send the link
    var API_key="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";
    sg_mail.setApiKey(API_key)
    console.log("Sending message to "+recipient+"...")
    var body="Hi, Welcome to sharespace, we are very excited to have you and are eager to help you find the place that suites you"
    var html=`
        <center>
        <div style='color:white; background-color:#003B95'>
            <h1>Sharespace</h1>
            <h2>Thank you for signing up with us</h2>
            <p>You now just need to activate your account</p>
            <h3>Click <a href='http://localhost:5000/new_registration/activate_account/`+recipient+`'>here</a> to activate your account</h3>
        </div>
        </center>
        `
    
    msg={
        to: recipient,
        from: 'audire.usher@gmail.com',
        subject: "Welcome to Sharespace",
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


module.exports=router
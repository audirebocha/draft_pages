const express=require('express')
const session=require('express-session')
const router=express.Router()
router.use(express.json())
const bodyParser = require('body-parser')
const mongoose=require('mongoose')
const User=require('../models/user')
const sg_mail= require('@sendgrid/mail')



const API_key="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";
sg_mail.setApiKey(API_key)


router.use(express.static('../assets'))
router.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}))

// create application/json parser
const jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })



async function db_connect(){
    uri="mongodb+srv://root:123@cluster0.u5atqck.mongodb.net/sharespace?retryWrites=true&w=majority"
    try{
        await mongoose.connect(uri);
        console.log('Connected to Mongo DB at login process');
    }catch(error){
        console.error(error)
    }
}
db_connect()


//*********************************************************************************************************** */
router.post('/',urlencodedParser,async (req,res)=>{
    var email=req.body['username']
    //Check if the user's email is in the database
    result = await User.find({email:email})
    if(result.length){
        if(req.body['password'] === result[0]['password']){
            if(result[0]['verified']){
                req.session.auth=true
                res.redirect('/')
            }else{
                res.redirect('/welcome')
            }
        }else{
            //res.json({status:"failed",message:'Wrong password',results:result})
            res.redirect('/login')
        }
    }else{
        //res.json({data:req.body,params:req.params})
        res.redirect('/login')
    }
})

router.get('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect('/')
})



module.exports=router
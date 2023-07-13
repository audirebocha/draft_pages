const express=require('express')
const session=require('express-session')
const bodyParser = require('body-parser')
const user_registration_route=require('./routes/user_registration')
const user_login_processor=require('./routes/user_login_process')
const password_reset=require('./routes/password_reset')
const auth = require('./API/auth')
const cors=require('cors')
const admin=require('./API/admin_function')

// create application/json parser
const jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })


const app= express()
app.set("view engine",'ejs')
app.use(cors({
    origin:'http://localhost:5173',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
}));
app.use(express.static('./assets'))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}))



app.get('/',(req,res)=>{
    random_string=Math.random().toString(36).toUpperCase().split('.')[1];
    res.render('index',{auth:req.session.auth});
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/registration',(req,res)=>{
    res.render('registration')
})

app.get('/welcome',(req,res)=>{
    res.render('account_activation')
})

app.get('/reset_password',(req,res)=>{
    res.render('reset_password1')
})
app.get('/reset_password_reset_code',(req,res)=>{
    res.render('reset_password2',{ email : req.session.email })
})
app.get('/reset_password_reset_form',(req,res)=>{
    res.render('reset_password3',{ email : req.session.email })
})






//************************************Route Handlers and APIs*********************************************** */
app.use("/new_registration",user_registration_route)
app.use('/login_processor',user_login_processor);
app.use('/reset_password_process',password_reset);

//************************************************APIs******************************************** */
app.use('/auth',auth);
app.use('/admin',admin);

app.listen(5000,()=>{console.log("Server has started on port 5000")})


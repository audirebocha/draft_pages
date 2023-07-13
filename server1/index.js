import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
import Listings from './models/Listings.js';
import Order from './models/order.js';
import MpesaPay from 'mpesapay';

app.use(express.json());
app.use(cors());

const Consumer_Key = "6AQcgb9GcqP3PgZWIt35pO6G1zkNTdG7"
const Consumer_Secret = 'JTdHl1O46liwViKb'
const Business_Short_Code = 174379
const Passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'
const Transaction_Description = "STKPush";
const Account_Reference = "Sharespace";
const PartyA = 600981
const B2C_Security_Credential = 'I/10oZmvgEcX+TsrtMZ1isiajShsXzG4w75a3/xxF0oqg4KvIhtUM64gogR60CgNhoPARQu7OJESyyhRII5iCO9rLuLv115DEhcAqdRbbiStzctspOM2TaTYXYdBZ3+i8nTB+hFKKRLkZg2ZGDH4hETiDVgS+EkFOY5qgT7WJrZA+Nrx1kmUNNAGYMPAeHark/vfS+ZPQtYJwx3bth3HSi0mAUiBPdIqVhmDbhyt5IXrmvj1qZYn4scl1fOq4S2lnYYsn4OxZgVgO8dkHv8SJ2zCGSkybG5oKi4kvIcRw/GSEVnUndTZFpnXuecUvEt1EA9wVYo9X+e8dljG6M1Ssg=='
const Initiator_Name = "testapi"
const Environment = "sandbox | live";
const callbackUrl = "https://fresh-connect.vercel.app/callback";





const mpesapay = new MpesaPay(
  Consumer_Key,
  Consumer_Secret,
  Business_Short_Code,
  Passkey,
  Account_Reference,
  Transaction_Description,
  PartyA,
  B2C_Security_Credential,
  Initiator_Name,
  Environment
);

mongoose.connect("mongodb+srv://root:123@cluster0.u5atqck.mongodb.net/sharespace?retryWrites=true&w=majority", { useNewUrlParser: true ,useUnifiedTopology: true });

app.get('/listingDetails', async(req, res) => {
    
        try {
            const listings = await Listings.find();
            res.status(200).json(listings);
        }
        catch(err) {
            res.status(404).json({message: err.message});
        }
   
});
app.get('/listingDetails/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const listing = await Listings.findById(id);
        res.status(200).json(listing);
    }
    catch(err) {
        res.status(404).json({message: err.message});
    }
});



app.post('/insert', async(req, res) => {
    const{
        place,
        sublet,
        description,
        features,
        perks,
        gender,
        isSmokingAllowed,
        isPetsAllowed,
        price,
        title,
        desc,
        images
    } = req.body;

    const newSublet = new Listings({
        place,
        sublet,
        description,
        features,
        perks,
        gender,
        isSmokingAllowed,
        isPetsAllowed,
        price,
        title,
        desc,
        images
    })
    try {
        await newSublet.save();
        res.status(200).json(newSublet);
    } catch(err) {
        console.log(err)
    }
});

app.post('/order', async(req, res) => {
    const{
        name,
        phoneNumber,
        startDateTime,
        endDateTime,
        rentAmount,
        securityDepositAmount
        } = req.body;

    const newOrder = new Order({
        name,
        phoneNumber,
        startDateTime,
        endDateTime,
        rentAmount,
        securityDepositAmount
    })
    try {
        await newOrder.save();
        res.status(200).json(newOrder);
    } catch(err) {
        
        res.status(500).json({message: err.message});
    }   
    });

    app.post('/stkPush', async(req, res) => {
        const{ phone , amount } = req.body;
        initiatePayment(amount, phone, callbackUrl);

    async function initiatePayment(amount, phone, callbackUrl) {
      try {
        const response = await mpesapay.stkPush(amount, phone, callbackUrl);
        console.log(amount, phone, callbackUrl);
        console.log(mpesapay);
        console.log(response);
        res.status(200).json({ response });
        // Handle the response data
      } catch (error) {
        res.status(500).json({ error: error.message });
        // Handle errors
      }
    }
    });
        



const port = 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
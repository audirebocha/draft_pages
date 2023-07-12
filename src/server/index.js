import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
import Listings from './models/Listings.js';

app.use(express.json());
app.use(cors());

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

const port = 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
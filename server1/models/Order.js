import { Schema, model,  } from "mongoose";

const OrderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,

    },
    startDateTime: {
        type: Date,

    },
    endDateTime: {
        type: Date,
    },
    rentAmount: {
        type: Number,
    },
    securityDepositAmount: {
        type: Number,
    }
    
});

const Order = model("Order", OrderSchema);

export default Order;

import mongoose from "mongoose";

//this is for creating a schema for the contact form
const contactSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
},
{
    // If you set timestamps: true, Mongoose will add two properties of type Date to your schema:
// 1.createdAt: a date representing when this document was created
// 2.updatedAt: a date representing when this document was last updated
    timestamps: true, //this is for adding the timestamp of the message sent by the user
}
);


//this is for creating a model or document for the contact form

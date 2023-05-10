'use server'

import Contact from "@/models/contact";
import dbConnect from "@/utils/MongodbConnect";

export const submitform = async (data) => { // here data is the object that is passed from the client side when the form is submitted i.e. username, phone, email, message
    try {
        await dbConnect(); //this is for connecting to the database

        await Contact.create(data); //this is for creating a new document in the database

        return {status: 200 , message: 'Your message has been sent successfully'}; //this is for returning the status of the form whether it is submitted or not
    } catch (error) {
        return {status: 500, message: 'Your message could not be sent'};
    }
};
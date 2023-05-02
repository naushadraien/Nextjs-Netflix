import dbConnect from "../../../utils/MongodbConnect";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) { //this code is copied from beta.nextsjs for route.js code

    try {
        
        const body = await req.json(); //this is for sending the request body to the database
        await dbConnect(); //this is for connecting to the database

        await Contact.create(body); //this is for creating a new document in the database

        return NextResponse.json({ //NextResponse is a new way in nextjs to send the message to the user
            message: 'Your message has been sent successfully' //this is for sending a success response to the user
        },
        {
            status: 200 //this is for sending the status code to the user
        }
        )

    } catch (error) {
        return NextResponse.json({
            message: 'Server Error, Please Try Again!' //this is for sending an error response to the user
        },
        {
            status: 500 //this is for sending the status error code to the user
        })
    }
 }
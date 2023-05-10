"use client"; //because useState works only in client side and client component is used when we have to use react hooks and handling events where as server component is used when dealing with API calls and fetching data from database
import styles from "@/app/styles/contact.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";
import { submitform } from "../contact/serverActionContact";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ContactForm = () => {
  const [user, setUser] = useState({});
  const [status, setStatus] = useState(null); //this is used to set the status of the form whether it is submitted or not

  const getUsers = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); //this is for targetting the name component of the form that is assigned as value
    // console.log(user);
  };

  const handleSubmit = async (formData) => {
    // e.preventDefault(); //this is used to prevent the default behaviour of the form that is to refresh the page when the form is submitted
    try {
      //this handleSubmit is calling the API and sending the data to the database which is made inside the api folder in the root directory and within which contact folder is made and within we have route.js file which is used to send the data to the database
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { 
      //     "Content-Type": "application/json" 
      //   },
      //   body: JSON.stringify({ //here username, phone, email, message are the names that are used in the database and user.username, user.phone, user.email, user.message are the values that are used in the database from the user from client side when the form is submitted
      //     username: user.username,
      //     phone: user.phone,
      //     email: user.email,
      //     message: user.message,
      //   }),
      // });


      //commented the above code and used the below code to use the server action for the form
 
      //this response is for server action for the form
      const response = await submitform({
        username: formData.get("username"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        message: formData.get("message"),
      });

      //Setting the status based on the response from the API route
      if (response.status === 200) { //this is used to check the status of the form whether it is submitted or not

        setUser({
          username: "",
          phone: "",
          email: "",
          message: "",
        }); //this is used to clear the form after the form is submitted

        setStatus("success"); //this is used to set the status of the form whether it is submitted or not
      } else {
        setStatus("error"); //this is used to set the error status of the form whether it is submitted or not
      };

    } catch (error) {
      console.log(error);
    }    
  };

  return (
    <form className={styles.contact_form} 
    // onSubmit={handleSubmit}
    action={handleSubmit}
    >
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter Your Name:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Your Name"
          className={mulish.className}
          value={user.username}
          onChange={getUsers}
          required
          autoComplete="off"
        />
      </div>

      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Enter Your Phone:
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Enter Your Phone"
          className={mulish.className}
          value={user.phone}
          onChange={getUsers}
          required
        />
      </div>

      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Enter Your Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          className={mulish.className}
          value={user.email}
          onChange={getUsers}
          required
        />
      </div>

      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Your Message:
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Enter Your Message"
          className={mulish.className}
          rows={5}
          value={user.message}
          onChange={getUsers}
          required
        />
      </div>
      <div>

        {status === "success" && <p className={styles.success_msg}>Thank You for Sending Us a Message!</p>}
        {status === "error" && <p className={styles.error_msg}>Something went wrong while submitting your message!</p>}

        <button type="submit" className={mulish.className}>
          Message Me
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

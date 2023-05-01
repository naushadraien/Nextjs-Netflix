"use client"; //because useState works only in client side and client component is used when we have to use react hooks and handling events where as server component is used when dealing with API calls and fetching data from database
import styles from "@/app/styles/contact.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ContactForm = () => {
  const [user, setUser] = useState({});

  const getUsers = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); //this is for targetting the name component of the form that is assigned as value
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          {" "}
          Enter Your Name:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Your Name"
          className={mulish.className}
          onChange={getUsers}
          required
          autoComplete="off"
        />
      </div>

      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          {" "}
          Enter Your Phone:
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Enter Your Phone"
          className={mulish.className}
          onChange={getUsers}
          required
        />
      </div>

      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          {" "}
          Enter Your Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          className={mulish.className}
          onChange={getUsers}
          required
        />
      </div>

      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          {" "}
          Your Message:
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Enter Your Message"
          className={mulish.className}
          rows={5}
          onChange={getUsers}
          required
        />
      </div>
      <div>
        <button type="submit" className={mulish.className}>
          Message Me
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

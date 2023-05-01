import ContactCard from "../components/ContactCard";
import styles from "@/app/styles/contact.module.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us:</h1>

        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We&apos;d love to hear <span>from you</span>
          </h2>
          <ContactForm />
        </section>

        {/* This iframe is for map which was taken from google map */}
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.93209911412!2d85.7970654!3d26.6506564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec43653122d935%3A0x914bcfc8af5242ce!2sJaleshwor%2045700!5e0!3m2!1sen!2snp!4v1682944134958!5m2!1sen!2snp"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className={styles.mapping}
          ></iframe>
      </div>
    </>
  );
};

export default Contact;

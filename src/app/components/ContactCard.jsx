import styles from '@/app/styles/contact.module.css'
import Link from 'next/link';
import { MdEmail,MdVoiceChat,MdForum } from "react-icons/md";

const ContactCard = () => {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.grid_card}>
                    {/* i tag is used for adding the icon */}
                    <i >
                        <MdEmail/> {/* MdEmail is the icon for the email */}
                    </i>
                    <h2>Email</h2>
                    <p>Sunday to Friday Expected</p>
                    <p className={styles.last_para}>response time: 24 hours</p>
                    <Link href='mailto:naushadraien5@gmail.com'>Send Email <span>-&gt;</span></Link>
                </div>

                <div className={styles.grid_card}>
                    {/* i tag is used for adding the icon */}
                    <i >
                        <MdVoiceChat/> {/* MdVoiceChat is the icon for the email */}
                    </i>
                    <h2>Live Chat</h2>
                    <p>Weekdays: 8AM - 5PM ET</p> {/* ET is the Eastern Time */}
                    <p className={styles.last_para}>response time: 24 hours</p>
                    <Link href='/'>Chat Now <span>-&gt;</span></Link>
                </div>

                <div className={styles.grid_card}>
                    {/* i tag is used for adding the icon */}
                    <i >
                        <MdForum/> {/* MdForum is the icon for the email */}
                    </i>
                    <h2>Community Forum</h2>
                    <p>Sunday to Friday Expected</p>
                    <p className={styles.last_para}>response time: 24 hours</p>
                    <Link href='/' target='_blank'>Ask the Community <span>-&gt;</span></Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ContactCard
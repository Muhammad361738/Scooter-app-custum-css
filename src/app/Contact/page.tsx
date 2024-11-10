import React from 'react';
import styles from '../styles/Page.module.css'; // Adjust the path as necessary

const Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <p className={styles.title}>Contact</p>
                {/* Contact Form */}
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <input
                            className={styles.input}
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            required
                        />
                        <input
                            className={styles.input}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            required
                        />
                        <input
                            className={styles.input}
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Phone"
                            required
                        />
                        <textarea
                            className={styles.textArea}
                            name="message"
                            id="message"
                            placeholder="Message"
                            required
                        ></textarea>
                    </form>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Page;

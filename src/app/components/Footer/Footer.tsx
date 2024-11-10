import React from 'react';
import Image from 'next/image';
import f1 from '../../Assests/f1.jpg';
import f2 from '../../Assests/f2.jpg';
import f6 from '../../Assests/f6.jpg';
import footer from '../../Assests/footer.png';
import styles from '../../styles/footer.module.css'; // Importing CSS module

const Page = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.mainContent}>
                <Image className={styles.footerImage} src={footer} alt='' />

                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>About</h3>
                    <div className={styles.columnText}>
                        <p className={styles.columnTextItem}>Company</p>
                        <p className={styles.columnTextItem}>Teams</p>
                        <p className={styles.columnTextItem}>Profile</p>
                        <p className={styles.columnTextItem}>Careers</p>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>Resources</h3>
                    <div className={styles.columnText}>
                        <p className={styles.columnTextItem}>Contact</p>
                        <p className={styles.columnTextItem}>Application</p>
                        <p className={styles.columnTextItem}>FQA Features</p>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>Legals</h3>
                    <div className={styles.columnText}>
                        <p className={styles.columnTextItem}>Copyright Privacy</p>
                        <p className={styles.columnTextItem}>Policy Disclaimer</p>
                        <p className={styles.columnTextItem}>Terms</p>
                    </div>

                    <div className={styles.socialIconsContainer}>
                        <Image className={styles.socialIcon} src={f1} alt='' />
                        <Image className={styles.socialIcon} src={f2} alt='' />
                        <Image className={styles.socialIcon} src={f6} alt='' />
                    </div>
                </div>
            </div>
            <div className={styles.footerText}>
                <p>Copyright 2021. All rights reserved</p>
            </div>
        </div>
    );
};

export default Page;

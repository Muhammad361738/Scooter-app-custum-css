import React from 'react';
import Image from 'next/image';
import icon from "../Assests/icon.png";
import image5 from "../Assests/image5.png";
import image6 from "../Assests/image6.png";
import image7 from "../Assests/image7.png";
import image8 from "../Assests/image8.png";
import styles from '../styles/MultipleAcc.module.css';

const MultipleAcc = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Multiple Accessories</h2>
            <p className={styles.description}>There are multiple modes for the Scooter for your multiple needs</p>
            
            <div className={styles.accessoryContainer}>
                <div className={styles.accessoryInfo}>
                    <h5>Golf bag Rock</h5>
                    <div className={styles.infoItem}>
                        <Image src={icon} alt='' />
                        <p>Material: Aluminium alloy</p>
                    </div>
                    <div className={styles.infoItem}>
                        <Image src={icon} alt='' />
                        <p>Color: black</p>
                    </div>
                    <div className={styles.infoItem}>
                        <Image src={icon} alt='' />
                        <p>Capacity: 45lbs</p>
                    </div>
                    <div className={styles.infoItem}>
                        <Image src={icon} alt='' />
                        <p>Ease: Steady & adjustable</p>
                    </div>
                </div>
                <div className={styles.imageGroup}>
                    <Image src={image5} alt='' />
                    <Image src={image6} alt='' />
                </div>
            </div>

            <div className={styles.accessoryContainer}>
                <div className={styles.imageGroup}>
                    <Image src={image7} alt='' />
                    <Image src={image8} alt='' />
                </div>
                <div className={styles.accessoryInfo}>
                    <h5>Shopping Rack</h5>
                    <div className={styles.infoItem}>
                        <Image src={icon} alt='' />
                        <p>Material: Aluminium alloy</p>
                    </div>
                    <div className={styles.infoItem}>
                        <Image src={icon} alt='' />
                        <p>Color: black</p>
                    </div>
                    <div className={styles.infoItem}>
                        <Image src={icon} alt='' />
                        <p>Capacity: 45lbs</p>
                    </div>
                    <div className={styles.infoItem}>
                        <Image src={icon} alt='' />
                        <p>Ease: Steady & adjustable</p>
                    </div>
                </div>
            </div>

            <div className={styles.buttonContainer}>
                <button>More Accessories Coming Soon</button>
            </div>
        </div>
    );
}

export default MultipleAcc;

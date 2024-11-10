import React from 'react';
import Image from 'next/image';
import image4 from "../Assests/image4.png";
import styles from '../styles/HighMoter.module.css'; // Import your CSS module

const HighMoter = () => {
    return (
        <div className={styles.highMoterContainer}>
            <h1 className={styles.highMoterTitle}>High Efficiency Motor</h1>
            <p className={styles.highMoterDescription}>
                More torque for powerful riding with 22% maximum hill climbing capability.
            </p>
            <div>
                <Image className={styles.highMoterImage} src={image4} alt='High Efficiency Motor' />
            </div>
        </div>
    );
}

export default HighMoter;
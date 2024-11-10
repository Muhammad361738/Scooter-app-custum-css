import React from 'react';
import Image from 'next/image';
import image12 from "../Assests/image12.png";
import image13 from "../Assests/image13.png";
import image14 from "../Assests/image14.png";
import image15 from "../Assests/image15.png";
import image16 from "../Assests/image16.png";
import styles from '../styles/Colors.module.css';

const Colors = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.title}>Colors</h1>
                <p className={styles.description}>Check out our products colors</p>
                <div className={styles.image1}>
                    <Image src={image12} alt='' layout="responsive" width={700} height={400} />
                </div>
            </div>
            <div className={styles['image-container']}>
                <Image className={styles.image} src={image13} alt='' />
                <Image className={styles.image} src={image14} alt='' />
                <Image className={styles.image} src={image15} alt='' />
                <Image className={styles.image} src={image16} alt='' />
            </div>
        </div>
    );
}

export default Colors;

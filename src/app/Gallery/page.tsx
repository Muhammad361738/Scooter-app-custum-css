import React from 'react';
import Image from 'next/image';
import image9 from "../Assests/image9.png";
import image10 from "../Assests/image10.png";
import image11 from "../Assests/image11.png";
import styles from '../styles/gallery.module.css';

const Gallery = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Gallery</h2>
            <p className={styles.description}>
                View gallery of our products and make yourself satisfied with our creation
            </p>
            
            <div className={styles.galleryGrid}>
                <div className={styles.imageContainer}>
                    <Image className={styles.image} src={image9} alt='' />
                    
                    <div className={`${styles.buttonGroup}`}>
                        <button className={styles.button}>More Accessories Coming Soon</button>
                        <button className={styles.button}>More Accessories Coming Soon</button>
                        <button className={styles.button}>More Accessories Coming Soon</button>
                    </div>
                </div>

                <div className={styles.largeImageContainer}>
                    <Image className={styles.image} src={image10} alt='' />
                    <Image className={styles.image} src={image11} alt='' style={{ marginTop: "20px" }} />
                </div>

                
            </div>
        </div>
    );
};

export default Gallery;

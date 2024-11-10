import React from 'react';
import Image from 'next/image';
import image3 from "../Assests/image3.png";
import icon from "../Assests/icon.png";
import styles from '../styles/ProductInfo.module.css'; 

const ProductInfo = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>PRODUCT INFORMATION</h2>
            <p className={styles.description}>Our Scooter has following unique design and technology features</p>
            <div className={styles.flexContainer}>
                <div className={styles.imageContainer}>
                    <Image className={styles.productImage} src={image3} alt='' />
                </div>
                <div className={styles.featuresContainer}>
                    {[
                        "Lightweight aircraft grade aluminium frame",
                        "Car grade lithium battery",
                        "Self-balanced",
                        "Plug n play",
                        "Quick release adapter",
                        "RFID key cards"
                    ].map((feature, index) => (
                        <div key={index} className={styles.featureItem}>
                            <Image className={styles.featureIcon} src={icon} alt='' />
                            <p className={styles.featureText}>{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;
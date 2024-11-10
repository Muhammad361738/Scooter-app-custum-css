import React from 'react';
import Image from 'next/image';
import image2 from "../../Assests/image2.png";
import image1 from "../../Assests/image1.png";
import arrow from "../../Assests/arrow.jpg";
import styles from '../../styles/Hero.module.css'; // Import the CSS module

const Hero = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <h1 className={styles.heroTitle}>LETS RIDE</h1>
                    <p className={styles.heroSubtitle}>THE FUTURE.</p>
                    <div className={styles.separator}></div>
                    <p className={styles.heroDescription}>Simple and sleek design with users in mind.</p>
                    <div className={styles.buttonSection}>
                        <div className={styles.button}>
                            <Image className={styles.arrowImage} src={arrow} alt='Arrow icon' />
                            <button>Buy Now</button>
                        </div>
                        <div className={styles.videoText}>
                            <p>Watch our
                            video how
                            it works</p>
                        </div>
                        <Image className={styles.image2} src={image2} alt='Video thumbnail' />
                    </div>
                </div>
                <div className={styles.heroImageContainer}>
                    <Image className={styles.heroImage} src={image1} alt="Hero image" />
                </div>
            </div>
            <div className={styles.statsContainer}>
    <div className={styles.statCard}>
        <p className={styles.statValue}>
            105 <span className={styles.statUnit}>lbs</span>
        </p>
        <p className={styles.statLabel}>Net Weight</p>
    </div>
    <div className={styles.statCard}>
        <p className={styles.statValue}>
            26 <span className={styles.statUnit}>mph</span>
        </p>
        <p className={styles.statLabel}>Top Speed</p>
    </div>
    <div className={styles.statCard}>
        <p className={styles.statValue}>
            28 <span className={styles.statUnit}>miles</span>
        </p>
        <p className={styles.statLabel}>Max Range</p>
    </div>
    <div className={styles.statCard}>
        <p className={styles.statValue}>
            89 <span className={styles.statUnit}>nm</span>
        </p>
        <p className={styles.statLabel}>Max Torque</p>
    </div>
    <div className={styles.statCard}>
        <p className={styles.statValue}>
            22% <span className={styles.statUnit}>slope</span>
        </p>
        <p className={styles.statLabel}>Hill Climbing</p>
    </div>
    <div className={styles.statCard}>
        <p className={styles.statValue}>
            2x <span className={styles.statUnit}>lbs</span>
        </p>
        <p className={styles.statLabel}>Hydraulic Disc Brakes</p>
    </div>
</div>        </div>
    );
}

export default Hero;
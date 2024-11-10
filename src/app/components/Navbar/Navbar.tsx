"use client";
import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import logo from "../../Assests/logo.png";
import styles from '../../styles/navbar.module.css'; // Import custom styles

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className={styles.navBar}>
        <div className={styles.navBarContainer}>
          <div >
            <Image className={styles.logoContainer} src={logo} alt='Logo' />
          </div>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
  <ul className={styles.menuList}>
    <li className={styles.menuItem}>
      <Link  href="/">
        PRODUCTS <span>▼</span>
      </Link>
      <ul className={styles.dropdownMenu}>
      <li>
          <Link href="/Colors">Colors</Link>
        </li>
        <li>
          <Link href="/MultipleAcc">MultipleAcc</Link>
        </li>
        <li>
          <Link href="/HighMotor">HighMotor</Link>
        </li>
      </ul>
    </li>
   
    <li className={styles.menuItem}><Link href="/Gallery">GALLERY</Link></li>
    <li className={styles.menuItem}><Link href="/Contact">CONTACT</Link></li>

  </ul>
</div>

<div className={styles.loginSignupContainer}>
   <div>LOGIN</div>
   <div>SINGUP</div>
</div>
          {/* Hamburger Icon for Mobile */}
          <div className={styles.mobileMenuButton}>
            <button className={styles.button} onClick={toggleMenu} >&#8801;</button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <div className={styles.mobileMenuModal}>
          <button onClick={toggleMenu} className={styles.closeButton}>&#10006;</button>
          <ul className={styles.mobileMenuList}>
            <li><Link href="/" onClick={toggleMenu}>PRODUCTS</Link></li>
            <li><Link href="/Gallery" onClick={toggleMenu}>GALLERY</Link></li>
            <li><Link href="/Contact" onClick={toggleMenu}>CONTACT</Link></li>
            <li><Link href="/MultipleAcc" onClick={toggleMenu}>MultipleAcc</Link></li>
            <li><Link href="/login" onClick={toggleMenu}>LOG IN</Link></li>
            <li><Link href="/signup" onClick={toggleMenu}>SIGN UP</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Page;
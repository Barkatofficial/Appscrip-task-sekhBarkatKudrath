"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCreditCard, faDollarSign, faFlagUsa, faLinkedin, faUsd } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
    <div className={styles.topSection}>
      <div className={styles.leftColumn}>
        <h3>BE THE FIRST TO KNOW</h3>
        <p>Sign up for updates from ShopTrend.</p>
        <input type="email" placeholder="Enter your e-mail..." className={styles.emailInput} />
        <button className={styles.subscribeButton}>SUBSCRIBE</button>
      </div>
      <div className={styles.rightColumn}>
        <h3>CONTACT US</h3>
        <p>+44 221 33 5360</p>
        <p>customercare@shoptrend.com</p>
        <h3>CURRENCY</h3>
        <p><FontAwesomeIcon icon={faFlagUsa} /> USD</p>
        <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
      </div>
    </div>
    <div className={styles.bottomSection}>
      <div className={styles.column}>
        <h3>ShopTrend</h3>
        <p>About Us</p>
        <p>Stories</p>
        <p>Artisans</p>
        <p>Boutiques</p>
        <p>Contact Us</p>
        <p>EU Compliances Docs</p>
      </div>
      <div className={styles.column}>
        <h3>QUICK LINKS</h3>
        <p>Orders & Shipping</p>
        <p>Join/Login as a Seller</p>
        <p>Payment & Pricing</p>
        <p>Return & Refunds</p>
        <p>FAQs</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
      <div className={styles.column}>
        <h3>FOLLOW US</h3>
        <p><FontAwesomeIcon icon={faCamera} /></p>
        <p><FontAwesomeIcon icon={faLinkedin} /></p>
      </div>
      <div className={styles.column}>
        <h3>ShopTrend ACCEPTS</h3>
        <div className={styles.paymentIcons}>
          <span><FontAwesomeIcon icon={faCreditCard} /></span>
          <span><FontAwesomeIcon icon={faDollarSign} /></span>
        </div>
      </div>
    </div>
    <div className={styles.copyright}>
      <p>© 2025 ShopTrend. All rights reserved.</p>
    </div>
  </footer>
  );
}
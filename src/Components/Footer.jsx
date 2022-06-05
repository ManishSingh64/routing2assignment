import React from "react";
import { Link } from "react-router-dom";
import styles from "../Components/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h3>About</h3>
        <Link to="faq">
          <p>FAQ</p>
        </Link>
        <Link to="aboutus">
          <p>About Us</p>
        </Link>
        <Link to="contactus">
          <p>Contact Us</p>
        </Link>
      </div>

      <div className={styles.details}>
        <h3>Help</h3>
        <Link to="help">
          <p>Help</p>
        </Link>
        <Link to="Payments">
          <p>Payments</p>
        </Link>
        <Link to="shipping">
          <p>Shipping</p>
        </Link>
      </div>

      <div className={styles.leftBox}>
        <h3>Mail us:</h3>
        <p>
          Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
          Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
          Bengaluru, 560103, Karnataka, India
        </p>
      </div>
    </div>
  );
};

export default Footer;

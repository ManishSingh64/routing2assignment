import React from "react";
import { Link } from "react-router-dom";
import styles from "../Components/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div>
          <img className={styles.img}
            src="https://i.pinimg.com/originals/15/aa/16/15aa1678d4ee5615c5c53ed5c9968126.png"
            alt=""
          />
        </div>
        <div className={styles.shopsite}>
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <Link to="mens">
            <h3>Mens</h3>
          </Link>
          <Link to="womens">
            <h3>Womens</h3>
          </Link>
          <Link to="childrens">
            <h3>Childrens</h3>
          </Link>
        </div>
        <div>
          <button>
            <i class="fa-solid fa-user"></i>
          </button>
        </div>
        <div>
          <button>
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

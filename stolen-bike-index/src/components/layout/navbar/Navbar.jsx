import React from "react";
import logo from "../../assets/logo.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerLogo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.containerText}>
          <h2>Police Departament of Berlin</h2>
          <p>Stolen bykes</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

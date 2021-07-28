import React from "react";
import styles from './NavBar.module.css'
import Logo from '../../img/logo.png';

const NavBar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.izq}>
        <img src={Logo} alt='Police Department of Berlin' width='100'/>
        <div>
          <h1>Police Department of Berlin</h1>
          <h2 className={styles.subtitle}>Stolen Bykes</h2>
        </div>
      </div>
      <div className={styles.total}>
        <span>{1235678}</span>
        <p>total cases</p>
      </div>
    </div>
  )
}

export default NavBar;
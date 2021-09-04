import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "react-awesome-reveal";
import styles from "../../sass/pagenotfound/pagenotfound.module.scss";
import { ArrowCounterclockwise } from "@styled-icons/bootstrap/ArrowCounterclockwise";
import Lost from "../images/lost.gif";
const PageNotFound = () => {
  return (
    <div className={styles.containerNot}>
      <Reveal className={styles.reveal}>
        <div className={styles.sortTitle}>
          <p className={styles.title}>You seem to be lost, let me help you</p>
        </div>
        <div className={styles.sortImage}>
          <img className={styles.imageNot} src={Lost} alt="" />
        </div>
        <div className={styles.sortButton}>
          <Link className={styles.link} to="/">
            <button className={styles.button}>
              <ArrowCounterclockwise className={styles.iconsBikes} />
              Come back to home
            </button>
          </Link>
        </div>
      </Reveal>
    </div>
  );
};

export default PageNotFound;

"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Home.module.css";
import { faCog, faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

export default function Header() {

  return (
    <>
      <>
      <header className={styles.header}>
      <div className={styles.blackSection}>
      <span className={styles.leftIcon}>
          <FontAwesomeIcon icon={faCog} /> Lorem ipsum dolor
        </span>
        <span className={styles.centerText}>  <FontAwesomeIcon icon={faCog} /> Lorem ipsum dolor</span>
        <span className={styles.rightIcon}>
          <FontAwesomeIcon icon={faCog} /> Lorem ipsum dolor
        </span>
      </div>
      <div className={styles.container}>

        <div className={styles.logo}>
          <span className={styles.icon}>⚙️</span>
        </div>

        <div className={styles.middleContainer}>
          <div className={styles.logoText}>
            <h1>LOGO</h1>
          </div>
        </div>

        <div className={styles.icons}>
            <span className={styles.icon}><FontAwesomeIcon icon={faSearch} /></span>
            <span className={styles.icon}><FontAwesomeIcon icon={faHeart} /></span>
            <span className={styles.icon}><FontAwesomeIcon icon={faCartShopping} /></span>
            <span className={styles.icon}><FontAwesomeIcon icon={faUser} /></span>
            <select className={styles.languageSelect}>
              <option>ENG</option>
            </select>
          </div>

      </div>
      <nav className={styles.nav}>
        <a href="">SHOP</a>
        <a href="">SKILLS</a>
        <a href="">STORIES</a>
        <a href="">ABOUT</a>
        <a href="">CONTACT US</a>
      </nav>
    </header>

      </>
    </>
  );
}

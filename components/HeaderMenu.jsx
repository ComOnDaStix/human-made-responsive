import React, { useState } from "react";
import styles from "../styles/HeaderMenu.module.css";
import Link from "next/link";

const HeaderMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  

  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuList}>
        <li
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          SHOP
          {showDropdown && (
            <>
              <div className={styles.dropdown}>
                <div className={styles.sectionContainer}>
                  <div className={styles.section}>
                    <Link href="/AllItems" className={styles.link}>ALL ITEMS</Link>
                    <Link href="/section1/link2">NEW ARRIVALS</Link>
                    <Link href="/section1/link3">OUTERWEAR</Link>
                    <Link href="/section1/404">SHIRTS</Link>
                    <Link href="/section1/link3">T-SHIRTS</Link>
                  </div>
                  <div className={styles.section}>
                    <Link href="/section1/404">PANTS</Link>
                    <Link href="/section2/link1">SHOES</Link>
                    <Link href="/section2/link2">CAP & SHOES</Link>
                    <Link href="/section2/link3">BAG & POUCH</Link>
                    <Link href="/section2/link3">ACCESSORIES</Link>
                    <Link href="/section2/link3">INNER WEAR</Link>
                  </div>
                  <div className={styles.section}>
                    <Link href="/section1/404">HOME & LIFESTYLE</Link>
                    <Link href="/section3/link1">COLLABORATION ITEMS</Link>
                    <Link href="/section3/link2">CACTUS PLANT FLEA MARKET</Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </li>
        <Link className={styles.link} href="/404">
          <li>NEWS</li>
        </Link>
        <Link className={styles.link} href="/About">
          <li>ABOUT</li>
        </Link>
      </ul>
    </div>
  );
};

export default HeaderMenu;

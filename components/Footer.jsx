import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.SectionOne}>
          <ul className={styles.ul}>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>ALL ITEMS</li>
            </Link>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>NEW ARRIBALS</li>
            </Link>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>OUTERWEAR</li>
            </Link>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>SHIRTS</li>
            </Link>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>T-SHIRTS</li>
            </Link>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>SWEATERS</li>
            </Link>
          </ul>
        </div>
        <div className={styles.SectionTwo}>
          <ul className={styles.ul}>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>ALL ITEMS</li>
            </Link>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>NEW ARRIBALS</li>
            </Link>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>OUTERWEAR</li>
            </Link>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>SHIRTS</li>
            </Link>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>T-SHIRTS</li>
            </Link>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>SWEATERS</li>
            </Link>
          </ul>
        </div>
        <div className={styles.SectionThree}>
          <ul className={styles.ul}>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>ALL ITEMS</li>
            </Link>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>NEW ARRIBALS</li>
            </Link>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>OUTERWEAR</li>
            </Link>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>SHIRTS</li>
            </Link>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>T-SHIRTS</li>
            </Link>
            <Link href="/" className={styles.link}>
              <li className={styles.listItems}>SWEATERS</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

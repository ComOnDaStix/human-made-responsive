import Link from "next/link";
import styles from "../styles/404.module.css";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Link href={"/"}>
          <Image src={"/logo2.svg"} width={100} height={100} className={styles.logoTwo} alt="img"/>
          </Link>
        </div>
        <h1 className={styles.h1}>404 - Page Not Found</h1>
        <p className={styles.p}>The page you are looking for could not be found.</p>
        <Link href="/">
          <button className={styles.button}>Go Back To Homepage</button>
        </Link>
      </div>
    </div>
  );
}

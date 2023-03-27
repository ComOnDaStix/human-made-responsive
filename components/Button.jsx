import Link from "next/link";
import styles from "../styles/Button.module.css";

const CenteredButton = () => {
  return (
    <div className={styles.container}>
      <Link href="AllItems">
        <button className={styles.button}>VIEW ALL</button>
      </Link>
    </div>
  );
};

export default CenteredButton;

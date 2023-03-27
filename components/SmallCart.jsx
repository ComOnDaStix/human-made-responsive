// SmallCart.js
import styles from "../styles/SmallCart.module.css";
import Link from "next/link";

const SmallCart = ({ cart, close }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.smallCartOverlay} onClick={close}>
      <div className={styles.smallCart} onClick={stopPropagation}>
        {cart.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.imageUrl} alt={item.title} className={styles.image} />
            <div className={styles.details}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.size}>Size: {item.size}</div>
              <div className={styles.quantity}>Quantity: {item.quantity}</div>
            </div>
          </div>
        ))}
        <div className={styles.buttons}>
          <Link href="/Cart" passHref className={styles.link}>
            <button className={styles.buttonTop} onClick={close}>
              VIEW CART
            </button>
          </Link>
          <button className={styles.buttonBottom} onClick={close}>
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallCart;

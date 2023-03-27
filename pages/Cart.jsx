import { useCart } from "../components/UI/CartContext"
import styles from "../styles/Cart.module.css";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  const getTotalCost = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.h1}>CART</h1>
      <section className={styles.cartHeader}>
        <p>Item</p>
        <p className={styles.quantity}>Quantity</p>
        <p>Subtotal</p>
      </section>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <section key={item.id} className={styles.cartItem}>
            <img
              src={item.imageUrl}
              alt={item.title}
              className={styles.itemImage}
            />
            <div className={styles.itemDetails}>
              <p>{item.title}</p>
              <p>Size: {item.size}</p>
            </div>
            <div className={styles.quantityControl}>
              <button
                className={styles.button}
                onClick={() => decrementQuantity(item.id)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className={styles.button}
                onClick={() => incrementQuantity(item.id)}
              >
                +
              </button>
            </div>
            <Image
              src={"/trash.png"}
              width={20}
              height={20}
              className={styles.deleteButton}
              onClick={() => handleRemoveItem(item.id)}
              alt="img"
            />
            <p className={styles.subtotal}>
              {formatCurrency(item.price * item.quantity)}
            </p>
          </section>
        ))
      )}

      <section className={styles.totalCost}>
        <p className={styles.total}>Total:</p>
        <p className={styles.cost}>{formatCurrency(getTotalCost())}</p>
      </section>
      <div className={styles.buttonContainer}>
        <Link href="/">
          <button className={styles.checkoutButton}>CHECKOUT</button>
        </Link>
        <Link href="/AllItems">
          <button
            className={`${styles.checkoutButton} ${styles.continueShoppingButton}`}
          >
            CONTINUE SHOPPING
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

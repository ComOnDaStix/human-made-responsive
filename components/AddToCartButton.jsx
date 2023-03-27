import { useCart } from "../components/UI/CartContext";
import styles from "../styles/AddToCartButton.module.css"

const AddToCartButton = ({ product }) => {
  const { addToCart } = useCart();

  const handleClick = () => {
    // Read the selected size and quantity from the form
    const size = document.getElementById("size").value;
    const quantity = parseInt(document.getElementById("qty").value);

    addToCart(product, size, quantity);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
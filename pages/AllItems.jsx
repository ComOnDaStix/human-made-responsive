import ProductSection from "./ProductSection";
import styles from "../styles/AllItems.module.css"
import ProductList from "data/ProductList";

const AllItems = () => {
  const allItems = [...ProductList];

  return (
    <div className={styles.allItems}>
      <ProductSection items={allItems} />
    </div>
  );
};

export default AllItems;

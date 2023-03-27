import styles from "../styles/ProductSection.module.css";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProductSection = ({ items }) => {
  const router = useRouter();

  useEffect(() => {
    const scrollPosition = localStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      localStorage.removeItem("scrollPosition");
    }
  }, []);

  const handleClick = (id) => {
    localStorage.setItem("scrollPosition", window.pageYOffset);
    router.push(`/ProductDetails/${id}`);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.productContainer}>
        {items.map((product) => (
          <div
            key={product.id}
            className={styles.link}
            onClick={() => handleClick(product.id)}
          >
            <ProductCard product={product} className={styles.card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;

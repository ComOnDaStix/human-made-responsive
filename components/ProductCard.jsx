import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.ProductCardContainer}>
      <div className={styles.ImageWrapper}>
        <Image
          className={styles.ProductImage}
          src={product.imageUrl}
          layout="responsive"
          width={1}
          height={1}
          alt="img"
        />
        <div className={styles.ImageOverlay}></div>
      </div>
      <p className={styles.title}>{product.title}</p>
    </div>
  );
};

export default ProductCard;

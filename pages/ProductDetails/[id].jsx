import AddToCartButton from "@/components/AddToCartButton";
import ProductList from "data/ProductList";
import Image from "next/image";
import styles from "../../styles/ProductDetails.module.css";


export default function ProductDetails({ product }) {
  if (!product) return <div>Product not found</div>;
  

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.mainSection}>
        <div className={styles.sectionOneContainer}>
          <div className={styles.imageBox}>
            <Image src={product.imageUrl} width={600} height={600} alt="img"/>
          </div>
          <div className={styles.imageBox}>
            <Image src={product.imageUrlBack} width={600} height={600}  alt="img"/>
          </div>
        </div>
        <div className={styles.sectionTwoContainer}>
          <div className={styles.productTitle}>{product.title}</div>
          <div className={styles.priceContainer}>
            <div>{formatCurrency(product.price)}</div>
          </div>
          <div className={styles.smallerImgContainer}>
            <Image
              className={styles.smallImg}
              src={product.imageUrl}
              width={100}
              height={100}
              alt="img"
            />
          </div>
          <div className={styles.selectorsContainer}>
            <div className={styles.selectors}>
              <div className={styles.sizeSelector}>
                <label htmlFor="size">Size:</label>
                <select id="size" name="size">
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.qtySelector}>
                <label htmlFor="qty">Qty:</label>
                <select id="qty" name="qty">
                  {[...Array(10)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <AddToCartButton product={product} />
          <div className={styles.descriptionContainer}>
            {product.description}
          </div>
        </div>
      </div>
    </>
  );}

export async function getServerSideProps({ params }) {
  const allProducts = [...ProductList];
  const product = allProducts.find((p) => p.id === parseInt(params.id));

  return {
    props: {
      product,
    },
  };
}
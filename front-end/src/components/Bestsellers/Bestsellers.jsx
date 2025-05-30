import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";
import styles from "../Bestsellers/Bestsellers.module.css";

export const Bestsellers = ({ products }) => {
  return (
    <CenteredContent>
      <h2 className={styles.bestsellersHeader}>Sprawdź nasze bestsellery</h2>
      <div className={styles.productsWrapper}>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </CenteredContent>
  );
};

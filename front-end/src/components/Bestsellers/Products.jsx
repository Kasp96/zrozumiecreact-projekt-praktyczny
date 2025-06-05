import { CenteredContent } from '../CenteredContent/CenteredContent';
import { Product } from '../Product/Product';
import styles from '../Products/Products.module.css';

export const Products = ({ products, headerText }) => {
	return (
		<CenteredContent>
			<h2 className={styles.productsHeader}>{headerText}</h2>
			<div className={styles.productsWrapper}>
				{products.map((product) => {
					return <Product key={product.id} product={product} />;
				})}
			</div>
		</CenteredContent>
	);
};

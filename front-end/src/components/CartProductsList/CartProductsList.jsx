import { CartProduct } from '../CartProduct/CartProduct';
import { CenteredContent } from '../CenteredContent/CenteredContent';
import styles from '../../components/CartProductsList/CartProductsList.module.css';

export const CartProductsList = ({ products }) => {
	return (
		<CenteredContent>
			<div className={styles.cartProductsWrapper}>
				<h2>Koszyk</h2>
				<div>
					{products.map((product) => {
						return <CartProduct key={product.id} product={product} />;
					})}
				</div>
			</div>
		</CenteredContent>
	);
};

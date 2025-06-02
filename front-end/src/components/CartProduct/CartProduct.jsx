import DELETE_ICON from '../../assets/remove.svg';
import styles from '../CartProduct/CartProduct.module.css';

export const CartProduct = ({ product }) => {
	return (
		<div className={styles.cartProduct}>
			<img src={product.photos[0]} alt='cart product photo' />
			<div className={styles.cartProductInfo}>
				<div className={styles.topRow}>
					<h3>
						{product.brand} {product.productName}
					</h3>
					<p>{product.pricePLN}</p>
				</div>
				<p className={styles.priceRow}>
					<span>Cena:</span> {product.pricePLN}zł
				</p>
				<div className={styles.buttonRow}>
					<button>
						<img src={DELETE_ICON} alt='delete mark' /> Usuń
					</button>
				</div>
			</div>
		</div>
	);
};

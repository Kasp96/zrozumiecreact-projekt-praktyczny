import DELETE_ICON from '../../assets/remove.svg';
import CART_ICON from '../../assets/bag.svg';
import styles from '../FavouriteProduct/FavouriteProduct.module.css';

export const FavouritesProduct = ({ product }) => {
	return (
		<div className={styles.favouriteProduct}>
			<img src={product.photos[0]} alt='favourite product photo' />
			<div className={styles.favouriteProductInfo}>
				<div className={styles.topRow}>
					<h3>
						{product.brand}
						{product.productName}
					</h3>
					<p>{product.pricePLN}</p>
				</div>
				<p className={styles.priceRow}>
					<span>Cena:</span>
					{product.pricePLN}zł
				</p>
				<div className={styles.buttonRow}>
					<button>
						<img src={DELETE_ICON} alt='delete mark' />
						Usuń
					</button>
					<button>
						<img src={CART_ICON} alt='cart mark' />
						Dodaj do koszyka
					</button>
				</div>
			</div>
		</div>
	);
};

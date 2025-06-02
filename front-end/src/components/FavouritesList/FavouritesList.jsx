import { CenteredContent } from '../CenteredContent/CenteredContent';
import { FavouritesProduct } from '../FavouriteProduct/FavouriteProduct';
import styles from '../FavouritesList/FavouritesList.module.css';

export const FavouritesList = ({ products }) => {
	return (
		<CenteredContent>
			<div className={styles.favouritesWrapper}>
				<h2>Ulubione</h2>
				<div>
					{products.map((product) => {
						return <FavouritesProduct key={product.id} product={product} />;
					})}
				</div>
			</div>
		</CenteredContent>
	);
};

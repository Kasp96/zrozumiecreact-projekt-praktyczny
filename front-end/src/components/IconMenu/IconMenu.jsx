import { Link } from 'react-router-dom';
import BAG_ICON from '../../assets/bag.svg';
import HEART_ICON from '../../assets/heart.svg';
import styles from '../IconMenu/IconMenu.module.css';

export const IconMenu = () => {
	const cartItems = 2;

	return (
		<ul className={styles.iconMenu}>
			<li>
				<Link to={'/ulubione'}>
					<img src={BAG_ICON} />
				</Link>
			</li>

			<li>
				<Link to={'/koszyk'}>
					<img src={HEART_ICON} />
					<div className={styles.numberOfProducts}>{cartItems}</div>
				</Link>
			</li>
		</ul>
	);
};

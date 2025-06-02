import CAR_ICON from '../../assets/car.svg';
import styles from '../CartSummary/CartSummary.module.css';
import { CartProductsPriceContext } from '../../contexts/CartProductsPriceContext';
import { FullWidthButton } from '../FullWidthButton/FullWidthButton';
import { useContext } from 'react';

export const CartSummary = () => {
	const [productsPrice] = useContext(CartProductsPriceContext);

	let freeDelivery = 500;
	let deliveryFee = 49;

	return (
		<div className={styles.cartSummary}>
			<h3>Podsumowanie</h3>
			<div>
				<p>Wartość Produktów:</p>
				<p>{productsPrice}zł</p>
			</div>
			<div>
				<p>Koszt dostawy:</p>
				<p>{productsPrice > 500 ? 0 : deliveryFee}zł</p>
			</div>
			<span>
				<div>
					<p>Do zapłaty:</p>
					<p>
						{productsPrice > 500 ? productsPrice : productsPrice + deliveryFee}
						zł
					</p>
				</div>
			</span>
			<FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
			<div className={styles.details}>
				<img src={CAR_ICON} alt='delivery icon' />
				<p>Darmowa dostawa od {freeDelivery}zł</p>
			</div>
		</div>
	);
};

import styles from './Details.module.css';
import CAR_ICON from '../../assets/car.svg';
import RETURN_ICON from '../../assets/return.svg';
import { FullWidthButton } from '../FullWidthButton/FullWidthButton';
import { Accordion } from '../Accordion/Accordion';
import { FlexContainer } from '../FlexContainer/FlexContainer';

export const Details = ({ product }) => {
	const accordionContent = [
		{
			title: 'Opis produktu',
			content: product.description,
		},
		{
			title: 'Wskazówki pielęgnacyjne',
			content: product.maintenanceInfo,
		},
	];

	return (
		<FlexContainer>
			<div className={styles.details}>
				<div className={styles.productInfo}>
					<h2>{product.brand}</h2>
					<p>{product.productName}</p>
					<span>{product.pricePLN}zł</span>
				</div>
				<FullWidthButton isBlack={true}>Dodaj do koszyka</FullWidthButton>
				<div className={styles.deliveryInfo}>
					<div>
						<img src={CAR_ICON} />
						<p>Dostawa do 24h</p>
					</div>
					<div>
						<img src={RETURN_ICON} />
						<p>Zwrot do 100 dni!</p>
					</div>
				</div>
				<Accordion items={accordionContent} />
			</div>
		</FlexContainer>
	);
};

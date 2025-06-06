import CAR_ICON from '../../assets/car.svg';
import RETURN_ICON from '../../assets/return.svg';
import ARROW_ICON from '../../assets/arrow.svg';
import { FullWidthButton } from '../FullWidthButton/FullWidthButton';

export const Details = () => {
	return (
		<div>
			<h2>SunTzu</h2>
			<p>Biały Sweter</p>
			<p>199zł</p>
			<FullWidthButton />
			<div>
				<img src={CAR_ICON} />
				<p>Dostawa do 24h</p>
			</div>
			<div>
				<img src={RETURN_ICON} />
				<p>Zwrot do 100 dni!</p>
			</div>
			<div>
				<p>Opis produktu</p> <img src={ARROW_ICON} />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
					placeat?
				</p>
			</div>
			<div>
				<p>Opis produktu</p> <img src={ARROW_ICON} />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
					placeat?
				</p>
			</div>
		</div>
	);
};

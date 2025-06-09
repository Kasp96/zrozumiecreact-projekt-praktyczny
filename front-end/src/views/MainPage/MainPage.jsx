import { Hero } from '../../components/Hero/Hero';
import { Products } from '../../components/Products/Products';
import { useLoaderData } from 'react-router-dom';

export const MainPage = () => {
	const { heroImageUrl, bestsellers } = useLoaderData();
	console.log(useLoaderData(5));

	return (
		<>
			<Hero heroImage={heroImageUrl} />
			<Products products={bestsellers} headerText='Sprawdź nasze bestsellery' />
		</>
	);
};

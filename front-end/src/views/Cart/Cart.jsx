import { useState, useEffect } from 'react';
import { FlexContainer } from '../../components/FlexContainer/FlexContainer';
import { CartSummary } from '../../components/CartSummary/CartSummary';
import { CartProductsPriceContext } from '../../contexts/CartProductsPriceContext';
import { CartProductsList } from '../../components/CartProductsList/CartProductsList';

const products = [
	{
		id: 1,
		gender: 'men',
		category: 'odziez',
		subcategory: 'koszulki',
		productName: 'T-Shirt',
		brand: 'Top Brand',
		pricePLN: 499,
		priceUSD: 10,
		photos: [
			'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
			'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
			'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
		],
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
		maintenanceInfo:
			'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
	},
	{
		id: 2,
		gender: 'men',
		category: 'odziez',
		subcategory: 'koszulki',
		productName: 'T-Shirt',
		brand: 'Top Brand',
		pricePLN: 49,
		priceUSD: 10,
		photos: [
			'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
			'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
			'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
		],
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
		maintenanceInfo:
			'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
	},
	{
		id: 3,
		gender: 'men',
		category: 'odziez',
		subcategory: 'koszulki',
		productName: 'T-Shirt',
		brand: 'Top Brand',
		pricePLN: 49,
		priceUSD: 10,
		photos: [
			'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
			'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
			'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
		],
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
		maintenanceInfo:
			'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
	},
];
export const Cart = () => {
	const [productsPrice, setProductsPrice] = useState(null);
	useEffect(() => {
		setProductsPrice(
			products.reduce((sum, product) => sum + product.pricePLN, 0)
		);
	}, []);

	return (
		<FlexContainer>
			<CartProductsList products={products} />
			<CartProductsPriceContext.Provider value={[productsPrice]}>
				<CartSummary />
			</CartProductsPriceContext.Provider>
		</FlexContainer>
	);
};

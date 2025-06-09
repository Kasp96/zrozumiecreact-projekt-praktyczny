import { FlexContainer } from '../../components/FlexContainer/FlexContainer';
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu';
import { Broadcrumbs } from '../../components/Broadcrumbs/Broadcrumbs';
import { Pagination } from '../../components/Pagination/Pagination';
import { Products } from '../../components/Products/Products';
import { useLoaderData } from 'react-router-dom';

export const ProductsList = () => {
	const products = useLoaderData();
	console.log(products);

	return (
		<FlexContainer>
			<ExpandableMenu />
			<div>
				<Broadcrumbs headingText='Swetry' />
				<Products products={products} headerText='Swetry' />
				<Pagination numberOfPages={5} />
			</div>
		</FlexContainer>
	);
};

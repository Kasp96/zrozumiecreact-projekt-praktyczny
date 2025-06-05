import { Broadcrumbs } from '../../components/Broadcrumbs/Broadcrumbs';
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu';
import { Photos } from '../../components/Photos/Photos';
import { FlexContainer } from '../../components/FlexContainer/FlexContainer';
import { Layout } from '../../components/Layout/Layout';

export const ProductDetails = () => {
	return (
		<Layout>
			<FlexContainer>
				<ExpandableMenu />
				<div>
					<Broadcrumbs />
					<div>
						<Photos />
					</div>
				</div>
			</FlexContainer>
		</Layout>
	);
};

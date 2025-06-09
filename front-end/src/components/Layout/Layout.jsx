import { MainContent } from '../MainContent/MainContent';
import { CategoryMenu } from '../CategoryMenu/CategoryMenu';
import { CurrencySelector } from '../CurrencySelector/CurrencySelector';
import { Footer } from '../Footer/Footer';
import { IconMenu } from '../IconMenu/IconMenu';
import { Logo } from '../Logo/Logo';
import { MainMenu } from '../MainMenu/MainMenu';
import { TopBar } from '../TopBar/TopBar';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
	return (
		<>
			<MainContent>
				<TopBar>
					<MainMenu />
					<Logo />
					<div>
						<CurrencySelector />
						<IconMenu />
					</div>
				</TopBar>
				<CategoryMenu />
				<Outlet />
			</MainContent>
			<Footer />
		</>
	);
};

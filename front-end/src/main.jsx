import './styles/theme.css';
import './styles/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Favourites } from './views/Favourites/Favourites';
import { Cart } from './views/Cart/Cart';
import { ProductsList } from './views/ProductsList/ProductsList';
import { Layout } from './components/Layout/Layout';
import { MainPage } from './views/MainPage/MainPage';
import { MainPageLoader } from './api/mainPageLoader';
import { productListLoader } from './api/ProductListLoader';

const router = createBrowserRouter([
	{
		path: '',
		element: <Layout />,

		children: [
			{
				path: '/ulubione',
				element: <Favourites />,
			},
			{
				path: '/koszyk',
				element: <Cart />,
			},

			{
				path: '/:gender?',
				element: <MainPage />,
				loader: MainPageLoader,
			},

			{
				path: '/:gender/:category',
				element: <ProductsList />,
				loader: productListLoader,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);

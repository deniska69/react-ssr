/** Приложение React */

import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from './App';

// Hydrate pre-renderer #app element
hydrateRoot(
	document.getElementById('app') as HTMLElement,
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);

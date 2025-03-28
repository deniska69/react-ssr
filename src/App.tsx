import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => (
	<Routes>
		<Route path="/">
			<Route index element={<Home />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	</Routes>
);

export default App;

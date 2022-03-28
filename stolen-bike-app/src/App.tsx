import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BikesList } from './containers/BikesList/BikesList';
import { BikeDetail } from './components/BikeDetail/BikeDetail';
import { Header } from './components/Header/Header';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className='container'>
				<Routes>
					<Route path='/' element={<BikesList />} />
					<Route path='/bike/:id' element={<BikeDetail />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

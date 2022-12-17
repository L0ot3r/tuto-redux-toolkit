import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home, Login, Counter, Navbar } from './components';
import { store } from './redux/store';

function App() {
	return (
		<div className='min-w-full'>
			<Provider store={store}>
				<Router>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/contact' element={<Counter />} />
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;

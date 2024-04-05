import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthContext from './context/authContext';
import Customer from './data/type/Customer';
import About from './pages/About';
import Articles from './pages/Articles';
import Login from './pages/Login';
import Account from './pages/account/Account';
import Home from './pages/home/Home';

function App() {
	const [customer, setCustomer] = useState<Customer | null>(null);

	return (
		<AuthContext.Provider value={{ customer, setCustomer }}>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/articles' element={<Articles />} />
					<Route path='/about' element={<About />} />
					<Route path='/login' element={<Login />} />
					<Route path='/account' element={<Account />} />
				</Routes>
			</Router>
		</AuthContext.Provider>
	);
}

export default App;

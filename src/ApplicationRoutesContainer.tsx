import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './pages/About';
import Articles from './pages/Articles';
import Login from './pages/Login';
import Account from './pages/account/Account';
import Home from './pages/home/Home';
import { useEffect } from 'react';
import ArticlePage from './pages/ArticlePage';

export default function ApplicationRoutesContainer() {
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('user') == null) {
			navigate('/');
		}
	}, []);

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/articles' element={<Articles />} />
			<Route path='/about' element={<About />} />
			<Route path='/login' element={<Login />} />
			<Route path='/account' element={<Account />} />
			<Route path='/article/:id' element={<ArticlePage />} />
		</Routes>
	);
}

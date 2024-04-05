import { createContext } from 'react';
import IAuthContext from '../data/type/IAuthContext';

const AuthContext = createContext<IAuthContext>({
	customer: null,
	setCustomer: () => {},
});

export default AuthContext;

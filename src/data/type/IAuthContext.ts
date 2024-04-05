import { Dispatch, SetStateAction } from 'react';
import Customer from './Customer';

export default interface IAuthContext {
	customer: Customer | null;
	setCustomer: Dispatch<SetStateAction<Customer | null>>;
}

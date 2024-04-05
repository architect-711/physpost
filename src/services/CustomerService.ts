import { AxiosResponse } from 'axios';
import customerAPIConfig from '../data/config/customerAPIConfig';
import Customer from '../data/type/Customer';
import request from '../lib/request';

export default class CustomerService {
	public login(
		username: string,
		password: string
	): Promise<AxiosResponse<Customer>> {
		return request(
			'GET',
			`${
				customerAPIConfig.rootURL + customerAPIConfig.endpoints.login
			}/${username}/${password}`,
			null,
			''
		);
	}

	public deleteAccountById(id: number): Promise<AxiosResponse<null>> {
		return request(
			'GET',
			`${
				customerAPIConfig.rootURL +
				customerAPIConfig.endpoints.deleteById
			}/${id}`,
			null,
			''
		);
	}
}

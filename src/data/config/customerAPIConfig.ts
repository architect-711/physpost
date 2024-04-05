import API from '../type/API';

const customerAPIConfig: API = {
	rootURL: 'http://localhost:8082/v1/customer',
	endpoints: {
		getById: '/get',
		getByUsername: '/get',
		login: '/get',
		post: '/post',
		deleteById: '/delete',
	},
};

export default customerAPIConfig;

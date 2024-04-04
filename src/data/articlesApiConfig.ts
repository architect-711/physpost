import API from './type/API';

const articleApiConfig: API = {
	rootURL: 'http://localhost:8081/v1/articles',
	endpoints: {
		getById: '/get/',
		getLastWithLimit: '/get/last?limit=',
		post: '/post',
		delete: '/delete/',
	},
};

export default articleApiConfig;

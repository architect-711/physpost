import { API, ArticleApiEndpoints } from '../typing';

const articleApiConfig: API<ArticleApiEndpoints> = {
	rootURL: 'http://localhost:8081/v1/articles',
	endpoints: {
		getById: '/get/',
		getLastWithLimit: '/get/last?limit=',
		getArticlesWithTitleMatch: '/get/title?title=',
		post: '/post',
		delete: '/delete/',
	},
};

export default articleApiConfig;

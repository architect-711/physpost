import { AxiosResponse } from 'axios';
import articleApiConfig from '../data/articlesApiConfig';
import API from '../data/type/API';
import Article from '../data/type/Article';
import request from '../lib/request';

export default class ArticleService {
	private readonly endpoints: API = articleApiConfig;

	public async getLastWithLimit(
		limit: number
	): Promise<AxiosResponse<Article[], unknown>> {
		return request<Article[]>(
			'GET',
			this.endpoints.rootURL +
				this.endpoints.endpoints.getLastWithLimit +
				limit,
			null,
			''
		);
	}
}

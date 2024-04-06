import { AxiosResponse } from 'axios';
import articleApiConfig from '../data/config/articlesApiConfig';
import { Article, ArticleApiEndpoints, CreationArticle } from '../data/typing';
import request from '../lib/request';

type Response<T> = Promise<AxiosResponse<T>>;

export default class ArticleService {
	private readonly root: string = articleApiConfig.rootURL;
	private readonly endpoints: ArticleApiEndpoints =
		articleApiConfig.endpoints;

	public async getLastWithLimit(limit: number): Response<Article[]> {
		return request<Article[]>(
			'GET',
			this.root + this.endpoints.getLastWithLimit + limit
		);
	}

	public async getArticlesWithTitleMatch(title: string): Response<Article[]> {
		return request(
			'GET',
			this.root + this.endpoints.getArticlesWithTitleMatch + title
		);
	}

	public async postArticle(article: CreationArticle): Response<Article> {
		return request('POST', this.root + this.endpoints.post, article);
	}

	public async getArticleById(id: number): Response<Article> {
		return request('GET', this.root + this.endpoints.getById + id);
	}
}

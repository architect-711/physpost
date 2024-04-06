export type CreationArticle = Omit<Article, 'id' | 'dateCreated'>;

export interface API<T> {
	rootURL: RootURL;
	endpoints: T;
}

export interface Article {
	id: number;
	authorId: number;
	title: string;
	description: string;
	body: string;
	dateCreated: string;
}

export interface ArticleApiEndpoints {
	getById: string;
	getLastWithLimit: string;
	getArticlesWithTitleMatch: string;
	post: string;
	delete: string;
}

export interface Customer {
	id: number;
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	postsIds: number[];
	role: string;
}

export interface CustomerAPIEndpoints {
	getById: string;
	getByUsername: string;
	login: string;
	post: string;
	deleteById: string;
}

export type RequestMethods = 'GET' | 'POST' | 'DELETE' | 'PUT';

export type RootURL =
	| 'http://localhost:8080/v1/files'
	| 'http://localhost:8082/v1/customer'
	| 'http://localhost:8081/v1/articles';

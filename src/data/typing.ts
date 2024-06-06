import { AxiosResponse } from "axios";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export type CreationArticle = Omit<Article, "id" | "dateCreated">;

export interface Article {
    id: number;
    authorId: number;
    title: string;
    description: string;
    body: string;
    dateCreated: string;
}

export interface Person {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    postsIds: number[];
    role: string;
}

export type RequestMethods = "GET" | "POST" | "DELETE" | "PUT";

export type Response<T> = Promise<RequestFallback | AxiosResponse<T>>;

export interface UIInputProps {
    type?: HTMLInputTypeAttribute;
    className?: string;
    id?: string;
    placeholder?: string;
    isError: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    [key: string]: unknown;
}

export interface RequestFallback {
    errorMessage: string;
}

export interface CustomError {
    isError: boolean;
    message: string;
}

export interface PersonEndpoints {
    get: {
        getOneById: string;
        getOneByUsername: string;
        getOneByUsernameAndPassword: string;
    };
    post: {
        postOne: string;
    };
}

export interface ArticleEndpoints {
    get: {
        getOneById: string;
        getLastWithLimit: string;
        getWithTitleMatch: string;
    };
    post: {
        postOne: string;
    };
    delete: {
        deleteOne: string;
    };
}

export interface FilesEndpoints {
    get: {
        getOneById: string;
        getContentById: string;
    };
    post: {
        postOne: string;
    };
    delete: {
        deleteOneById: string;
    };
}

export type Endpoints = PersonEndpoints | ArticleEndpoints | FilesEndpoints;

export interface ArticlesContextType {
    articles: Article[];
    setArticles: (articles: Article[]) => void;
}

export interface RequestParameters {
    method: RequestMethods;
    url: string;
    data?: unknown;
    postContentType?: string;
}

export interface File {
    id: number;
    articleId: number;
    authorId: number;
    name: string;
    content: string;
}

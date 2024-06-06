import { articleAPI } from "../data/api";
import { Article, CreationArticle, Response } from "../data/typing";
import { Service } from "./Service";

export default class ArticleService extends Service {
    public static async getLastWithLimit(limit: number): Response<Article[]> {
        return await this.send<Article[]>({
            method: "GET",
            url: articleAPI.buildURL(articleAPI.get.getLastWithLimit + limit),
        });
    }

    public static async getArticlesWithTitleMatch(
        title: string
    ): Response<Article[]> {
        return await this.send<Article[]>({
            method: "GET",
            url: articleAPI.buildURL(articleAPI.get.getWithTitleMatch + title),
        });
    }

    public static async postArticle(
        article: CreationArticle
    ): Response<Article> {
        return await this.send<Article>({
            method: "POST",
            url: articleAPI.buildURL(articleAPI.post.postOne),
            data: article,
        });
    }

    public static async getArticleById(id: number): Response<Article> {
        return await this.send<Article>({
            method: "GET",
            url: articleAPI.buildURL(articleAPI.get.getOneById + id),
        });
    }

    public static async deleteArticleById(id: number): Response<Article> {
        if (localStorage.getItem("user") === null) {
            return { errorMessage: "User doesn't exit" };
        }
        return await this.send({
            method: "DELETE",
            url: articleAPI.buildURL(articleAPI.delete.deleteOne + id),
        });
    }
}

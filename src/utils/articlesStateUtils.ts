import { useContext } from "react";
import { ArticlesContext } from "../context/articlesContext";
import ArticleService from "../services/ArticleService";

const { articles, setArticles } = useContext(ArticlesContext);

export const deleteArticleById = (id: number): void => {
    ArticleService.deleteArticleById(id).catch(error => throw new Error(error));

    setArticles(articles.filter(article => article.id !== id));
}
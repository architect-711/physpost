import { useContext, useState } from "react";
import { ArticlesFallback } from "../../components/article/ArticlesFallback";
import Head from "../../components/common/Head";
import { ArticlesContext } from "../../context/articlesContext";
import { app } from "../../data/app";
import { Article, ArticlesContextType, CustomError } from "../../data/typing";
import { useService, useServiceEffect } from "../../hooks/useService";
import ArticleService from "../../services/ArticleService";
import Description from "./Description";

export default function Home() {
    const [error, setError] = useState<CustomError>({ isError: false, message: "" });
    const { articles, setArticles } = useContext<ArticlesContextType>(ArticlesContext);

    useServiceEffect<Article[]>({
        promise: () => articles.length > 0 ? undefined : ArticleService.getLastWithLimit(app.home_articles_request_number),
        successCallback: (response) => setArticles(response.data),
        errorCallback: (error) => setError({ isError: true, message: error.errorMessage })
    });

    const deleteArticleById = (id: number): void => {
        useService({
            promise: () => ArticleService.deleteArticleById(id),
            successCallback: (_) => {
                if (articles === null || articles.length <= 0)
                    throw new Error("No articles");

                setArticles(articles.filter((article) => article.id !== id));
            },
            errorCallback: (error) => setError({ isError: true, message: error.errorMessage })
        });
    };

    return (
        <main>
            <Head />

            <Description />
            <ArticlesFallback
                error={error}
                articles={{ articles, heading: "Последние статьи" }}
                deleteArticleById={deleteArticleById}
            />

        </main>
    );
}

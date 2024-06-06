import { useState } from "react";
import { ArticlesFallback } from "../components/article/ArticlesFallback";
import Head from "../components/common/Head";
import { app } from "../data/app";
import { Article, CustomError } from "../data/typing";
import { useService, useServiceEffect } from "../hooks/useService";
import ArticleService from "../services/ArticleService";

export default function Articles() {
    const [error, setError] = useState<CustomError>({
        isError: false,
        message: "",
    });
    const [articles, setArticles] = useState<Article[] | null>(null);
    const [inputValue, setInputValue] = useState<string>("");

    useServiceEffect<Article[]>({
        promise: () => ArticleService.getLastWithLimit(app.home_articles_request_number),
        successCallback: (response) => setArticles(response.data),
        errorCallback: (error) => setError({ isError: true, message: error.errorMessage })
    });

    const findByTitle = (): void => {
        if (!inputValue.length) return window.location.reload();

        useService({
            promise: () => ArticleService.getArticlesWithTitleMatch(inputValue),
            successCallback: (response) => setArticles(response.data),
            errorCallback: (error) => setError({ isError: true, message: error.errorMessage })
        });
    };

    return (
        <main>
            <Head />

            <div className="container">
                <section className="search d-flex justify-content-between pb-4">
                    <input
                        placeholder="Найти статью по названию"
                        className="form-control"
                        onChange={(event) => setInputValue(event.target.value)}
                        value={inputValue}
                        style={{ width: "70%" }}
                    />
                    <button
                        className="w-25 btn btn-primary btn-lg"
                        onClick={findByTitle}
                    >
                        Найти
                    </button>
                </section>
            </div>

            <ArticlesFallback
                error={error}
                articles={{ articles, heading: "Последние статьи" }}
                deleteArticleById={() => {}}
            />

        </main>
    );
}

import { useState } from "react";
import { ArticlesFallback } from "../components/article/ArticlesFallback";
import Footer from "../components/common/Footer";
import Head from "../components/common/Head";
import { Article, CustomError } from "../data/typing";
import { useService, useServiceEffect } from "../hooks/useService";
import ArticleService from "../services/ArticleService";

export default function Articles() {
    const [error, setError] = useState<CustomError>({
        isError: false,
        message: "",
    });
    const [articles, setArticles] = useState<Article[] | null>(null);
    const [inputValue, setInputValue] = useState<string>();

    useServiceEffect<Article[]>(
        ArticleService.getLastWithLimit(9),
        (response) => setArticles(response.data),
        (error) => setError({ isError: true, message: error.message })
    );

    const findByTitle = (): void => {
        if (typeof inputValue == "undefined" || !inputValue.length) {
            return window.location.reload();
        }

        useService(
            ArticleService.getArticlesWithTitleMatch(inputValue),
            (response) => setArticles(response.data),
            (error) => setError({ isError: true, message: error.message })
        );
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
            />

            <Footer />
        </main>
    );
}

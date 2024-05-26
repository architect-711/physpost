import { useState } from "react";
import { ArticlesFallback } from "../../components/article/ArticlesFallback";
import Footer from "../../components/common/Footer";
import Head from "../../components/common/Head";
import { Article, CustomError } from "../../data/typing";
import { useServiceEffect } from "../../hooks/useService";
import ArticleService from "../../services/ArticleService";
import Description from "./Description";

export default function Home() {
    const [error, setError] = useState<CustomError>({
        isError: false,
        message: "",
    });
    const [articles, setArticles] = useState<Article[] | null>(null);

    useServiceEffect<Article[]>(
        ArticleService.getLastWithLimit(9),
        (response) => setArticles(response.data),
        (error) => setError({ isError: true, message: error.message })
    );

    return (
        <main>
            <Head />

            <Description />
            <ArticlesFallback
                error={error}
                articles={{ articles, heading: "Последние статьи" }}
            />

            <Footer />
        </main>
    );
}

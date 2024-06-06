import { Article, CustomError } from "../../data/typing";
import ArticlesMapper from "./ArticlesMapper";

interface Props {
    error: CustomError;
    articles: {
        articles: Article[] | null;
        heading: string;
    };
    deleteArticleById: (id: number) => void;
}

export const ArticlesFallback = ({
    error,
    articles,
    deleteArticleById,
}: Props) => {
    return (
        <>
            {
                !error.isError &&
                articles !== null &&
                articles.articles?.length 
            ? (
                <ArticlesMapper
                    articles={articles.articles}
                    deleteArticleById={deleteArticleById}
                    heading={articles.heading}
                />
            ) : (
                <p style={{ textAlign: "center" }}>{ error.message || "Нет статей" }</p>
            )}
        </>
    );
};

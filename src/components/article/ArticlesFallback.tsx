import { Article, CustomError } from "../../data/typing";
import ArticlesMapper from "./ArticlesMapper";

interface Props {
    error: CustomError;
    articles: {
        articles: Article[] | null;
        heading: string;
    };
}

export const ArticlesFallback = ({ error, articles }: Props) => {
    return (
        <>
            {!error.isError ? (
                <ArticlesMapper
                    articles={articles.articles}
                    heading={articles.heading}
                />
            ) : (
                <p style={{ textAlign: "center" }}>An error happened</p>
            )}
        </>
    );
};

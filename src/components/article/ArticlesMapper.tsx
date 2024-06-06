import { Article } from "../../data/typing";
import ArticleItem from "./ArticleItem";

interface Props {
    articles: Article[];
    heading: string | undefined;
    deleteArticleById: (id: number) => void;
}

export default function ArticlesMapper({
    articles,
    heading,
    deleteArticleById,
}: Props) {
    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                {heading && <h1 className="mb-4">{heading}</h1>}

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
                    {articles == null ? (
                        <button
                            className="btn btn-primary"
                            style={{ width: "10%" }}
                            type="button"
                            disabled={true}
                        >
                            <span
                                className="spinner-border spinner-border-sm"
                                aria-hidden="true"
                            ></span>
                            <span role="status">Загрузка...</span>
                        </button>
                    ) : (
                        articles.map((article) => (
                            <ArticleItem
                                article={article}
                                deleteArticleById={deleteArticleById}
                                key={article.id}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

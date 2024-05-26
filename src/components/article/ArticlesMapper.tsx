import { Article } from "../../data/typing";
import ArticleItem from "./ArticleItem";

export default function ArticlesMapper({
    articles,
    heading,
}: {
    articles: Article[] | null;
    heading: string | undefined;
}) {
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
                            <ArticleItem article={article} key={article.id} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

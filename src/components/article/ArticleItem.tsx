import { useNavigate } from "react-router-dom";
import { Article } from "../../data/typing";

interface Props {
    article: Article;
    deleteArticleById: (id: number) => void;
}

export default function ArticleItem({ article, deleteArticleById }: Props) {
    const navigate = useNavigate();

    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h2 className="mb-4">{article.title}</h2>

                    <p className="card-text">{article.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                onClick={() =>
                                    navigate("/article/" + article.id)
                                }
                            >
                                Читать
                            </button>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => deleteArticleById(article.id)}
                            >
                                Удалить
                            </button>
                        </div>
                        <small className="text-body-secondary">
                            {article.dateCreated.split(" ")[0]}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}

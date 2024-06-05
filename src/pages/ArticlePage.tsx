import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Head from "../components/common/Head";
import { Article } from "../data/typing";
import ArticleService from "../services/ArticleService";
import styles from '../assets/css/article.module.css'

export default function ArticlePage() {
    const [article, setArticle] = useState<Article | null>(null);
    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return alert("Что-то пошло не так(");
        }
        ArticleService.getArticleById(Number(id)).then((response) =>
            setArticle("errorMessage" in response ? null : response.data)
        );
    }, []);

    return (
        <main className="">
            <Head />

            <div className={`container ${styles.article_container}`}>
                {!article && <h1 >Нет такой статьи</h1>}

                {article !== null && (
                    <>
                        <h1 className={`${styles.header}`}>{article.title}</h1>
                        <h2 className="mb-4">{article.description}</h2>
                        <div
                            dangerouslySetInnerHTML={{ __html: article.body }}
                        ></div>
                    </>
                )}
            </div>

        </main>
    );
}

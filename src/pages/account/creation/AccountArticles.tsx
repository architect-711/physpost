import { useState } from "react";
import { CreationArticle } from "../../../data/typing";
import ArticleService from "../../../services/ArticleService";
import ArticleCreation from "./ArticlesCreation";

const defaultArticleConfig: CreationArticle = {
    authorId: 1,
    title: "",
    description: "",
    body: "",
};

export default function AccountArticles() {
    const [article, setArticle] = useState<CreationArticle>(defaultArticleConfig);

    const onSave = (newArticle: CreationArticle): void => {
        console.log('worked');
        
        const errorCondition: boolean =
            newArticle.body.length <= 0 &&
            newArticle.title.length <= 0 &&
            newArticle.description.length <= 0;

        if (errorCondition) {
            return alert("Ошибка заполнения статьи");
        }

        ArticleService.postArticle(newArticle)
            .then((response) => {
                alert("Статья создана.");
                setArticle(defaultArticleConfig);
            })
            .catch((error) =>
                alert(`Ошибка создания\nПричина: ${error.message}`)
            );
    };

    return (
        <section className="p-4 w-100">
            <h2 className="mb-2">Создать статью</h2>

            <ArticleCreation
                article={article}
                setArticle={setArticle}
                onSave={onSave}
            />
        </section>
    );
}

import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import { Dispatch, SetStateAction } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import froalaConfig from "../../../data/froalaConfig";
import { CreationArticle } from "../../../data/typing";
import FilesSaver from "./filesSrcChanger";

const ArticleCreation = ({
    article,
    setArticle,
    onSave,
}: {
    article: CreationArticle;
    setArticle: Dispatch<SetStateAction<CreationArticle>>;
    onSave: (newArticle: CreationArticle) => void;
}) => {
    const filesSaver = new FilesSaver();

    const insertContent = async (): Promise<void> => {
        try {
            await filesSaver.saveFiles().catch((error) => {
                throw new Error(error);
            });

            console.log("saved files");

            const froalaEditor: Element | null = document.querySelector(
                ".fr-element.fr-view"
            );
            if (!froalaEditor) {
                return alert(`Редактор не найден?`);
            }
            const content: string = froalaEditor.innerHTML;
            const newArticle: CreationArticle = { ...article, body: content };

            setArticle({ ...article, body: content });
            onSave(newArticle);
        } catch (error: unknown) {
            if (error === Error && "errorMessage" in error) {
                return alert("Error. " + error.errorMessage);
            }
            // @ts-ignore
            console.error('message' in error ? error.message : 'Unknown error');
        }
    };

    return (
        <article>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Название"
                    value={article.title}
                    autoFocus
                    onChange={(event) =>
                        setArticle({ ...article, title: event.target.value })
                    }
                />

                <label htmlFor="floatingInput">Создать статью</label>
            </div>
            <img />

            <div className="form-floating">
                <textarea
                    className="form-control"
                    placeholder="Описание"
                    id="floatingTextarea"
                    value={article.description}
                    onChange={(event) =>
                        setArticle({
                            ...article,
                            description: event.target.value,
                        })
                    }
                ></textarea>
                <label htmlFor="floatingTextarea">Описание</label>
            </div>
            <hr />
            <div id="editor">
                <FroalaEditor config={froalaConfig} />
            </div>
            <button
                className="btn btn-outline-primary w-100 mt-4"
                onClick={insertContent}
            >
                Создать
            </button>
        </article>
    );
};

export default ArticleCreation;

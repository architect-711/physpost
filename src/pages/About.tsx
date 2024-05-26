import { NavLink } from "react-router-dom";
import Footer from "../components/common/Footer";
import Head from "../components/common/Head";

export default function About() {
    return (
        <main>
            <Head />

            <div className="container py-4">
                <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Сайт о физике</h1>
                        <p className="col-md-8 fs-4">
                            Сайт-сборник статей по физике для проекта Палецкого
                            Дмитрия Георгиевича.
                        </p>
                        <NavLink to="/login" className="btn btn-primary btn-lg">
                            Создать статью
                        </NavLink>
                    </div>
                </div>

                <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-bg-dark rounded-3">
                            <h2>Есть вопросы?</h2>
                            <p>
                                Сайт не предназначен для широкого использования
                                и нужен лишь для временного показа членам
                                приёмной комисси.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                            <h2>Как стать автором</h2>
                            <p>
                                Просто! Никак, на данный момент статьи может
                                писать лишь автор (я).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

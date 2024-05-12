import { NavLink } from "react-router-dom";

export default function Description() {
    return (
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Сайт о физике</h1>
                    <p className="lead text-body-secondary">
                        Здесь вы найдёте бесчисленное количество статей по
                        физике, озватывающих самые разные темы. Если вы чего-то
                        не нашли, то напишите свою статью.
                    </p>
                    <p>
                        <NavLink
                            to="/articles"
                            className="btn btn-primary my-2"
                            style={{ marginRight: "10px" }}
                        >
                            Статьи
                        </NavLink>
                        <NavLink to="/login" className="btn btn-secondary my-2">
                            Написать статью
                        </NavLink>
                    </p>
                </div>
            </div>
        </section>
    );
}

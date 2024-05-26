import { NavLink } from "react-router-dom";
import { app } from "../../data/app";
import { basePaths } from "../../data/paths";

export default function Footer() {
    return (
        <footer className="footer fixed-bottom">
            <div className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-body-secondary">
                    © 2024 Company, Inc
                </p>

                <NavLink
                    to="/"
                    className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                >
                    {app.title}
                </NavLink>

                <ul className="nav col-md-4 justify-content-end">
                    {basePaths.map((paths) => (
                        <NavLink
                            key={paths.id}
                            className={"nav-link px-2 text-body-secondary"}
                            to={paths.path}
                        >
                            {paths.name}
                        </NavLink>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

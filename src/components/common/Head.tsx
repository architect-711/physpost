import { NavLink } from "react-router-dom";
import { app } from "../../data/app";
import { basePaths, loginPaths } from "../../data/paths";
import { Person } from "../../data/typing";

const Head = () => {
    const storageCustomer: string | null = localStorage.getItem("user");
    const customer: Person | null =
        storageCustomer == null ? null : JSON.parse(storageCustomer);

    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <NavLink className="text-primary fs-4" to="/">
                        {app.title}
                    </NavLink>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    {basePaths.map((link) => (
                        <NavLink
                            key={link.id}
                            to={link.path}
                            className="nav-link px-2 link-secondary"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </ul>

                <div className="col-md-3 text-end">
                    {customer !== null ? (
                        <NavLink to="/account">{customer.username}</NavLink>
                    ) : (
                        loginPaths.map((path) => (
                            <NavLink
                                key={path.id}
                                to={path.path}
                                className={
                                    loginPaths[loginPaths.length - 1] === path
                                        ? "btn btn-primary me-2"
                                        : "btn btn-outline-primary me-2"
                                }
                            >
                                {path.name}
                            </NavLink>
                        ))
                    )}
                </div>
            </header>
        </div>
    );
};

export default Head;

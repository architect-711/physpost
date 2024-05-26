import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ArticlePage from "./pages/ArticlePage";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import Account from "./pages/account/Account";
import Home from "./pages/home/Home";

export default function ApplicationRoutesContainer() {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (localStorage.getItem("user") == null) {
    //         navigate("/");
    //     }
    // }, []);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
    );
}

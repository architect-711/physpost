import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationRoutesContainer from "./ApplicationRoutesContainer";
import { ArticlesContext } from "./context/articlesContext";
import { Article } from "./data/typing";

const App = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    return (
        <ArticlesContext.Provider value={{ articles, setArticles }}>
            <Router>
                <ApplicationRoutesContainer />
            </Router>
        </ArticlesContext.Provider>
    );
};

export default App;

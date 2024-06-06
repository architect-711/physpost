import { createContext } from "react";
import { ArticlesContextType } from "../data/typing";

export const ArticlesContext = createContext<ArticlesContextType>({
    articles: [],
    setArticles: () => {},
});

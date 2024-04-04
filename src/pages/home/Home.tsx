import { useState } from 'react';
import Footer from '../../components/Footer';
import Head from '../../components/Head';
import Article from '../../data/type/Article';
import useService from '../../hooks/useService';
import ArticleService from '../../services/ArticleService';
import Description from './Description';
import LatesPosts from './LatestArticles';

export default function Home() {
	const service: ArticleService = new ArticleService();
	const [articles, setArticles] = useState<Article[] | null>(null);

	useService<Article[] | null>(() => {
		return service.getLastWithLimit(3);
	}, setArticles);

	return (
		<main>
			<Head />

			<Description />
			<LatesPosts articles={articles} />

			<Footer />
		</main>
	);
}

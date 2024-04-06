import { useState } from 'react';
import ArticlesMapper from '../../components/ArticlesMapper';
import Footer from '../../components/Footer';
import Head from '../../components/Head';
import { Article } from '../../data/typing';
import useService from '../../hooks/useService';
import ArticleService from '../../services/ArticleService';
import Description from './Description';

export default function Home() {
	const service: ArticleService = new ArticleService();
	const [articles, setArticles] = useState<Article[] | null>(null);

	useService<Article[] | null>(service.getLastWithLimit(3), articles =>
		setArticles(articles)
	);

	return (
		<main>
			<Head />

			<Description />
			<ArticlesMapper articles={articles} heading='Последние статьи' />

			<Footer />
		</main>
	);
}

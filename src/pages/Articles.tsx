import { useState } from 'react';
import ArticlesMapper from '../components/ArticlesMapper';
import Footer from '../components/Footer';
import Head from '../components/Head';
import Article from '../data/type/Article';
import useService from '../hooks/useService';
import ArticleService from '../services/ArticleService';

export default function Articles() {
	const service = new ArticleService();
	const [articles, setArticles] = useState<Article[] | null>(null);
	const [inputValue, setInputValue] = useState<string>();

	useService(service.getLastWithLimit(9), articles => setArticles(articles));

	const findByTitle = (): void => {
		if (typeof inputValue == 'undefined' || !inputValue.length) {
			return window.location.reload();
		}

		service
			.getArticlesWithTitleMatch(inputValue)
			.then(response => setArticles(response.data));
	};

	return (
		<main>
			<Head />

			<div className='container'>
				<section className='search d-flex justify-content-between pb-4'>
					<input
						placeholder='Find article by title'
						className='form-control'
						onChange={event => setInputValue(event.target.value)}
						style={{ width: '70%' }}
					/>
					<button
						className='w-25 btn btn-primary btn-lg'
						onClick={findByTitle}
					>
						Find
					</button>
				</section>
			</div>

			<ArticlesMapper articles={articles} heading='Последние статьи' />

			<Footer />
		</main>
	);
}

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Head from '../components/Head';
import { Article } from '../data/typing';
import ArticleService from '../services/ArticleService';
import Footer from '../components/Footer';

export default function ArticlePage() {
	const service = new ArticleService();
	const [article, setArticle] = useState<Article | null>(null);
	const { id } = useParams();

	useEffect(() => {
		if (!id) {
			return alert('Что-то пошло не так(');
		}
		service
			.getArticleById(Number(id))
			.then(response => setArticle(response.data))
			.catch(error => alert(`Ошибка!\nПричина: ${error.message}`));
	}, []);

	return (
		<main className='container'>
			<Head />

			{!article && <h1>Нет такой статьи</h1>}

			{article !== null && (
				<>
					<h1>{article.title}</h1>
					<h2 className='mb-4'>{article.description}</h2>
					<div
						dangerouslySetInnerHTML={{ __html: article.body }}
					></div>
				</>
			)}

			<Footer />
		</main>
	);
}

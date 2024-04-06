import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Head from '../components/Head';
import { Article } from '../data/typing';
import ArticleService from '../services/ArticleService';

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
		<main className=''>
			<Head />

			<div className='container'>
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
			</div>

			<Footer />
		</main>
	);
}

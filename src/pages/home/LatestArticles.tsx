import Article from '../../data/type/Article';
import ArticleItem from './ArticleItem';

export default function LatestArticles({
	articles,
}: {
	articles: Article[] | null;
}) {
	return (
		<div className='album py-5 bg-body-tertiary'>
			<div className='container'>
				<h1 className='mb-4'>Последние посты</h1>

				<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
					{articles == null ? (
						<h5>Нет постов</h5>
					) : (
						articles.map(article => (
							<ArticleItem article={article} key={article.id} />
						))
					)}
				</div>
			</div>
		</div>
	);
}

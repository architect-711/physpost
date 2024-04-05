import Article from '../data/type/Article';
import ArticleItem from './ArticleItem';

export default function ArticlesMapper({
	articles,
	heading,
}: {
	articles: Article[] | null;
	heading: string | undefined;
}) {
	return (
		<div className='album py-5 bg-body-tertiary'>
			<div className='container'>
				{heading && <h1 className='mb-4'>{heading}</h1>}

				<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
					{articles == null ? (
						<h5>Нет статей</h5>
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

import { useNavigate } from 'react-router-dom';
import { Article } from '../data/typing';

export default function ArticleItem({ article }: { article: Article }) {
	const navigate = useNavigate();

	return (
		<div className='col'>
			<div className='card shadow-sm'>
				{/* <svg
					className='bd-placeholder-img card-img-top'
					width='100%'
					height='225'
					xmlns='http://www.w3.org/2000/svg'
					role='img'
					aria-label='Placeholder: No Content'
					preserveAspectRatio='xMidYMid slice'
					focusable='false'
				>
					<title>Placeholder</title>
					<rect width='100%' height='100%' fill='#55595c'></rect>
					<text x='50%' y='50%' fill='#eceeef' dy='.3em'>
						No content
					</text>
				</svg> */}
				<div className='card-body'>
					<h2 className='mb-4'>{article.title}</h2>

					<p className='card-text'>{article.description}</p>
					<div className='d-flex justify-content-between align-items-center'>
						<div className='btn-group'>
							<button
								type='button'
								className='btn btn-sm btn-outline-secondary'
								onClick={() =>
									navigate('/article/' + article.id)
								}
							>
								Читать
							</button>
						</div>
						<small className='text-body-secondary'>
							{article.dateCreated.split(' ')[0]}
						</small>
					</div>
				</div>
			</div>
		</div>
	);
}

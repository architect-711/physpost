import { useState } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../../components/Footer';
import Head from '../../components/Head';
import customerChecker from '../../utils/customerChecker';
import AccountInfo from './AccountInfo';
import DeleteAccount from './DeleteAccount';

interface Mode {
	id: number;
	title: string;
	isActive: boolean;
	component: React.ReactNode;
}

export default function Account() {
	const navigate = useNavigate();

	if (!customerChecker()) {
		navigate('/login');
	}

	const [modes, setModes] = useState<Mode[]>([
		{ id: 1, title: 'Аккаунт', isActive: true, component: <AccountInfo /> },
		{ id: 2, title: 'Статьи', isActive: false, component: <p>articles</p> },
		{
			id: 3,
			title: 'Удалить',
			isActive: false,
			component: <DeleteAccount />,
		},
	]);

	const changeMode = (mode: Mode): void => {
		modes.forEach(internalMode =>
			internalMode.id == mode.id
				? (internalMode.isActive = true)
				: (internalMode.isActive = false)
		);
		setModes(_ => [...modes]);
	};

	return (
		<main className='container'>
			<Head />

			<div className='d-flex justify-content-start'>
				<div
					className='d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary'
					style={{ width: '280px' }}
				>
					<p className='fs-4 text-start mb-0'>Личный кабинет</p>
					<hr />
					<ul className='nav nav-pills flex-column mb-auto'>
						{modes.map(mode => (
							<li className='nav-item mb-2' key={mode.id}>
								<button
									className={`nav-link ${
										mode.isActive && 'active'
									} w-100 text-start`}
									aria-current='page'
									onClick={() => changeMode(mode)}
								>
									<svg
										className='bi pe-none me-2'
										width='16'
										height='16'
									>
										<use xlinkHref='#home'></use>
									</svg>
									{mode.title}
								</button>
							</li>
						))}
					</ul>
				</div>

				{modes.find(mode => mode.isActive === true)!.component}
			</div>
			<Footer />
		</main>
	);
}

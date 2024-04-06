import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Customer } from '../data/typing';
import CustomerService from '../services/CustomerService';
import customerChecker from '../utils/customerChecker';

export default function Login() {
	const navigate = useNavigate();

	useEffect(() => {
		if (customerChecker()) {
			navigate('/account');
		}

		// force bootstrap center form
		const centeringClass =
			'd-flex align-items-center py-4 bg-body-tertiary justify-content-center';

		centeringClass
			.split(' ')
			.forEach(classPart => document.body.classList.add(classPart));

		return () => {
			centeringClass
				.split(' ')
				.forEach(classPart =>
					document.body.classList.remove(classPart)
				);
		};
	}, []);

	const service = new CustomerService();

	const [form, setForm] = useState<{ username: string; password: string }>({
		username: '',
		password: '',
	});

	const login = async (event: Event): Promise<void> => {
		event.preventDefault();

		if ((form.password || form.username).length == 0) {
			return console.log('empty credentials');
		}

		const response: AxiosResponse<Customer, unknown> = await service
			.login(form.username, form.password)
			.then(response => response)
			.catch(error => alert('Ошибка входа\nПричина: ' + error.message));

		if (response.status !== 200) {
			return alert('Login failure');
		}

		localStorage.setItem('user', JSON.stringify(response.data));

		navigate('/account');
	};

	return (
		<main className='form-signin w-100 m-auto'>
			<form>
				<h1 className='h3 mb-3 fw-normal'>Вход</h1>

				<div className='form-floating'>
					<input
						type='username'
						onChange={event =>
							setForm({ ...form, username: event.target.value })
						}
						className='form-control'
						id='floatingInput'
						placeholder='Имя пользователя'
					/>
					<label htmlFor='floatingInput'>Имя пользователя</label>
				</div>
				<div className='form-floating'>
					<input
						type='password'
						onChange={event =>
							setForm({ ...form, password: event.target.value })
						}
						className='form-control mt-2'
						id='floatingPassword'
						placeholder='Password'
					/>
					<label htmlFor='floatingPassword'>Пароль</label>
				</div>

				<button
					onClick={login}
					className='btn btn-primary w-100 py-2 mt-4'
					type='submit'
				>
					Войти
				</button>
				<p className='mt-5 mb-3 text-body-secondary'>© 2024</p>
			</form>
		</main>
	);
}

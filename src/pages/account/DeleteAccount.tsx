import { useNavigate } from 'react-router-dom';
import CustomerService from '../../services/CustomerService';

export default function DeleteAccount() {
	const service = new CustomerService();
	const navigate = useNavigate();
	const customer = JSON.parse(localStorage.getItem('user')!);

	const deleteAccount = () => {
		service
			.deleteAccountById(customer.id)
			.then(response => {
				if (response.status !== 200) {
					alert('Ошибка удаления\n');
				}
				localStorage.removeItem('user');
				navigate('/');
			})
			.catch(error =>
				alert(`Ошибка удаления\nПричина: ${error.message}`)
			);
	};

	return (
		<div className='p-4'>
			<button
				onClick={deleteAccount}
				className='btn btn-primary d-inline-flex align-items-center'
			>
				delete
			</button>
			not work
		</div>
	);
}

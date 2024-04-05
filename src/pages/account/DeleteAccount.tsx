import CustomerService from '../../services/CustomerService';

export default function DeleteAccount() {
	const service = new CustomerService();
	const customer = JSON.parse(localStorage.getItem('user')!);

	const deleteAccount = () => {
		service.deleteAccountById(customer.id);
		localStorage.removeItem('user');
	};

	return (
		<div className='p-4'>
			<button
				onClick={deleteAccount}
				className='btn btn-primary d-inline-flex align-items-center'
			>
				delete
			</button>
		</div>
	);
}

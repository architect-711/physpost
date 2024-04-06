import { Customer } from '../../data/typing';

const AccountInfo = () => {
	const customer: Customer = JSON.parse(localStorage.getItem('user')!);

	return (
		<div className='d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center'>
			<div className='list-group list-group-radio d-grid gap-2 border-0'>
				{Object.entries(customer).map(entry => (
					<div className='position-relative' key={entry[0]}>
						<label
							className='list-group-item py-3 pe-5'
							htmlFor='listGroupRadioGrid1'
						>
							<strong className='fw-semibold'>{entry[0]}</strong>
							<span className='d-block small opacity-75'>
								{entry[1]}
							</span>
						</label>
					</div>
				))}
			</div>
		</div>
	);
};
export default AccountInfo;

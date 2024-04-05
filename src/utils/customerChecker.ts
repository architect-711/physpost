export default function customerChecker(): boolean {
	return localStorage.getItem('user') !== null;
}

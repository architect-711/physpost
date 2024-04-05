export default interface Customer {
	id: number;
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	postsIds: number[];
	role: string;
}

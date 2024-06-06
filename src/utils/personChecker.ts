export function checkPerson(): boolean {
    return localStorage.getItem('user') !== null;
}
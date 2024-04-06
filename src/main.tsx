import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/css/Global.css';

const root: Element | null = document.getElementById('root');

if (!root) {
	console.log("Couldn't find root div.");
} else {
	ReactDOM.createRoot(root).render(<App />);
}

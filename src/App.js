import './App.css';
import Card from './components/card';
import Logo from './components/logo';
import { app, db } from './hooks/firebase';

function App() {
	return (
		<div className="container">
			<Card />
			<Logo />
			<Card />
			<Card />
			<div className="spacer" />
			<Card />
			<Card />
			<div className="spacer" />
			<Card />
		</div>
	);
}

export default App;

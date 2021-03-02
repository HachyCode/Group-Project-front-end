import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import POs from './Pages/POs';
import POForm from './Pages/POForm';
import LogOff from './Pages/LogIn';

function App() {
	return (

		<Router>
			<Navbar/>
			<Switch>
				<Route path='/home' exact component={Home} />
				<Route path='/categories' component={Categories} />
				<Route path='/pos' component={POs} />
				<Route path='/poForm' component={POForm} />
				<Route path='/' component={LogOff} />
			</Switch>
		</Router>

	);
}

export default App;

import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import POs from './Pages/POs';
import POForm from './Pages/POForm';
import LogOff from './Pages/LogIn';
import Config from './Config';
import React from 'react';
import {eventBus, RouterUpdate} from './EventBus';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount = () => {
		eventBus.on(RouterUpdate, this.update);
	}

	componentWillUnmount= () => {
		eventBus.off(RouterUpdate, this.update);
	}

	update = () => {
		this.setState({});
	}

	genNavBar = () => {
		const draw = !!sessionStorage.getItem(Config.userTokenSession);
		if (draw) {
			return <Navbar/>;
		}
	}

	render = () => {
		return (
			<Router>
				{ this.genNavBar() }
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
}

export default App;

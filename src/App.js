import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cateogries from './Pages/Cateogries';
import POs from './Pages/POs';
import POForm from './Pages/POForm';
import LogOff from './Pages/LogIn';

function App() {
  return (

      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cateogries' component={Cateogries} />
          <Route path='/pos' component={POs} />
          <Route path='/poForm' component={POForm} />
          <Route path='/logOff' component={LogOff} />
        </Switch>
      </Router>

  );
}

export default App;

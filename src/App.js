import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cateogries from './Pages/Cateogries';
import LogIn from './Pages/LogIn';
import POs from './Pages/POs';
import POForm from './Pages/POForm';

function App() {
  return (

      <Router>
        <Navbar/>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/cateogries' component={Cateogries} />
          <Route path='/logIn' component={LogIn} />
          <Route path='/pos' component={POs} />
          <Route path='/poForm' component={POForm} />
        </Switch>
      </Router>

  );
}

export default App;

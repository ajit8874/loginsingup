import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Link ,Route} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout';
import Home from './Home';
//import {Button,Form,InputGroup} from 'react-bootstrap'
function App() {
  return (
     

    <Router>
       <Route exact path="/login" component={Login} />
       <Route path="/Home" component={Home} />
       <Route path="/logout" component={Logout} />
       <Route exact path="/" component={Signup} />
    </Router>
  );
}

export default App;

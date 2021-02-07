import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './SignupContainer'
import { HomePage } from './HomePage'



function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
            <Link to="/">Home</Link>
            <Link to="/signup">SignUp</Link>
        </header>
         
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
        {/* <Navbar /> */}
      {/* <Signup /> */}
    </div>
  );
}

export default App;

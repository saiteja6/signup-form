import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './Signup'



function App() {
  return (
    <div className="App">
        {/* <Navbar /> */}
      <Signup />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import Home from "./Home";
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Update from './Update';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/update">
          <Update/>
        </Route>
      </div>
    </Router>
  );
}

export default App;

import Message from './components/message/message/message'
import Signup from './components/signup/signup'
import Login from './components/login/login'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/message">
        <Message />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;

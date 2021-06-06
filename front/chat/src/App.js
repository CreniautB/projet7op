import Message from './components/message/message/message'
import Auth from './components/auth/auth'
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
      <Route path="/message">
        <Message />
      </Route>
      <Route path="/">
        <Auth />
      </Route>
    </Switch>
  </Router>

  );
}

export default App;

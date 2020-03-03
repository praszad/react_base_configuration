import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Link,
  Route
} from 'react-router-dom';
import DashBoardComponent from './Components/Dashboard/DashBoardComponent';
import LoginComponent from './Components/Login/LoginComponent';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Login</Link>
        </li>
        <li>
          <Link to='/login'>Logout</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/' exact>
          <DashBoardComponent />
        </Route>
        <Route path='/login' exact>
          <LoginComponent />
        </Route>
        <Route path='**'>
          <LoginComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

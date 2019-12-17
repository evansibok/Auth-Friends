import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Route
        exact
        path="/"
        component={Login}
      />
      
      <PrivateRoute
        path="/dashboard"
        component={Dashboard}
      />
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => localStorage.getItem("token") ? (<Component {...props} />) : (<Redirect to="/" />)}
  />
)

export default withRouter(App);

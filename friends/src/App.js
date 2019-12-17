import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Route
        exact
        path="/login"
        component={Login}
      />
      <Route
        exact
        path="/dashboard"
        component={Dashboard}
      />
      {/* <Dashboard /> */}

    </div>
  );
}

export default App;

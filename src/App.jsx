import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import store from './redux/store';
import Login from './components/Login';
// import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import { store } from './redux/slices';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    //TODO: create components and initialize redux store with dev tool integration
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/login' component={Login} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    //TODO: create components and initialize redux store with dev tool integration
    <Router>
      <>
        <Header />
        <h1>Coming Soon</h1>
        <h1>Let's create</h1>
      </>
    </Router>
  );
};

export default App;

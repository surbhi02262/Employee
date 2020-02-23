import React from 'react';
import{ Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import '../Styles/App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
    </Switch>
  )
}

export default App;
 
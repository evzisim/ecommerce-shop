import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => {
    return (<div><h2>This is Hats' page!</h2></div>);
}

const JacketsPage = () => {
    return (<div><h2>This is Jackets' page!</h2></div>);
}

const SneakersPage = () => {
    return (<div><h2>This is Sneakers' page!</h2></div>);
}

const WomensPage = () => {
    return (<div><h2>This is Women's page!</h2></div>);
}

const MensPage = () => {
    return (<div><h2>This is Men's page!</h2></div>);
}

function App() {
  return (
      <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop/hats' component={HatsPage} />
          <Route exact path='/shop/jackets' component={JacketsPage} />
          <Route exact path='/shop/sneakers' component={SneakersPage} />
          <Route exact path='/shop/womens' component={WomensPage} />
          <Route exact path='/shop/mens' component={MensPage} />
      </div>
  );
}

export default App;

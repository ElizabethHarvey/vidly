import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom'
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import Movies from './components/movies';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <main className="container">
        <Switch>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect path="/" exact to="/movies" />
        <Redirect path="/not-found" />
        </Switch>
      </main>
    )
  }
}

export default App;

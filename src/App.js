import React, { Component } from 'react';
import AppHeader from './Header.js';
import BeerInputter from './BeerInputter.js';
import BeerList from './BeerList.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.addBeer = this.addBeer.bind(this);
    this.state = { beerList: ['Modelo', 'PBR', 'Stone Delicious IPA'] }
  }

  addBeer(newBeer) {
    this.setState({ beerList: this.state.beerList.concat(newBeer) })
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <BeerInputter addBeer={this.addBeer} />
        <BeerList beers={this.state.beerList} />
      </div>
    );
  }
}

export default App;

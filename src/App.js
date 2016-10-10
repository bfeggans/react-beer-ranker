import React, { Component } from 'react';
import $ from 'jquery';
import AppHeader from './Header.js';
import BeerInputter from './BeerInputter.js';
import BeerList from './BeerList.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.addBeer = this.addBeer.bind(this);
    this.changeBeerRanking = this.changeBeerRanking.bind(this);
    this.state = { beerList: [] };
  }

  changeBeerRanking(brew, ranking) {
    var updatedBeerList = this.state.beerList.map(function(beer, i) {
      if (beer.name === brew) {
        beer.ranking = ranking;
      }
      return beer;
    });

    this.setState({
      beerList: updatedBeerList
    });
  }

  componentDidMount() {
    var that = this;
    $.ajax({
      url: 'http://www.mocky.io/v2/57fb3ee70f00003c034fd34e',
      dataType: 'jsonp',
      success: function(res) {
        that.setState({
          beerList: res.beerList
        });
      }
    });
  }

  addBeer(newBeer) {
    var defaultRanking = 1;
    this.setState({ beerList: this.state.beerList.concat({name: newBeer, ranking: defaultRanking}) })
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <BeerInputter addBeer={this.addBeer} />
        <BeerList beers={this.state.beerList} changeBeerRanking={this.changeBeerRanking} />
      </div>
    );
  }
}

export default App;

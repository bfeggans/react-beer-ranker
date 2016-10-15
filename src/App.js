import React, { Component } from 'react';
import firebase from 'firebase';
import AppHeader from './Header.js';
import BeerInputter from './BeerInputter.js';
import BeerList from './BeerList.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    const config = {
      apiKey: "AIzaSyAyC5124RJT2XyDh0t0JrXMNZOCH_edlLU",
      authDomain: "react-beer-ranker.firebaseapp.com",
      databaseURL: "https://react-beer-ranker.firebaseio.com",
      storageBucket: "",
      messagingSenderId: "544381783183"
    };
    firebase.initializeApp(config);
    this.fb = firebase.database().ref('beerList')
    this.addBeer = this.addBeer.bind(this);
    this.deleteBeer = this.deleteBeer.bind(this);
    this.changeBeerRanking = this.changeBeerRanking.bind(this);
    this.saveDescription = this.saveDescription.bind(this);
    this.state = { beerList: [] };
  }

  componentDidMount() {
    this.getBeersAndSetState();
  }

  getBeersAndSetState() {
    let that = this;

    this.fb.once('value').then(function(snapshot) {
      let res = snapshot.val();

      that.setState({
        beerList: Object.keys(res).map(function(el) {
          res[el]['id'] = el;
          return res[el];
        })
      });
    });
  }

  changeBeerRanking(id, ranking) {
    this.fb.child(id).update({
      ranking: ranking
    });
  }

  addBeer(newBeer) {
    const defaultRanking = 1;
    const defaultDescription = '';

    this.fb.push({
      description: defaultDescription,
      ranking: defaultRanking,
      name: newBeer
    });
    this.getBeersAndSetState();
  }

  deleteBeer(id) {
    this.fb.child(id).remove();
    this.setState({ beerList: this.state.beerList.filter(function(el) {
        return el.id !== id;
      })
    });
  }

  saveDescription(id, description) {
    this.fb.child(id).update({
      description: description
    });
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <BeerInputter addBeer={this.addBeer} />
        <BeerList beers={this.state.beerList} changeBeerRanking={this.changeBeerRanking} saveDescription={this.saveDescription} deleteHandler={this.deleteBeer}/>
      </div>
    );
  }
}

export default App;

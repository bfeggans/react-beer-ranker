import React, { Component } from 'react';
import BeerRanker from './BeerRanker';
import BeerDescription from './BeerDescription';

class BeerList extends Component {
  render() {
    var beerListItems = this.props.beers.map((beer, i) => {
      return (
        <li key={i}>
          { beer.name }
          <BeerRanker beer={beer} changeBeerRanking={this.props.changeBeerRanking}/>
          <BeerDescription saveDescription={this.props.saveDescription} beerDescription={beer.description}/>
        </li>
      );
    });
    return (
      <div>
        <ul>
          { beerListItems }
        </ul>
      </div>
    );
  }
}

export default BeerList;

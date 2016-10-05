import React, { Component } from 'react';

class BeerList extends Component {
  render() {
    var beerListItems = this.props.beers.map((beer, i) => {
      return <li key={ i }>{ beer }</li>;
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

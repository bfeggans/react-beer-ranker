import React, { Component } from 'react';

class BeerRanker extends Component {
  constructor() {
    super();
    this.rankingHandler = this.rankingHandler.bind(this);
  }

  rankingHandler(e) {
    this.props.changeBeerRanking(e.target.dataset.beer, e.target.value);
  }

  render() {
    var ranks = [3,2,1],
        optionList = ranks.map(function(e, i) {
          return <option key={i} value={e}>{e}</option>
        });

    return (
      <div>
        <select value={this.props.beer.ranking} data-beer={this.props.beer.name} onChange={this.rankingHandler}>
          { optionList }
        </select>
      </div>
    )
  }
}

export default BeerRanker;

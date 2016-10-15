import React, { Component } from 'react';

class BeerInputter extends Component {
  constructor() {
    super();
    this.state = { beerName: '' };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.addClickHandler = this.addClickHandler.bind(this);
  }

  inputChangeHandler(e) {
    this.setState({ beerName: e.target.value });
  }

  addClickHandler() {
    this.props.addBeer(this.state.beerName);
    this.setState({ beerName: '' });
  }

  render() {
    return (
      <div>
        <p>Enter Beer</p>
        <input type="text" value={this.state.beerName} onChange={this.inputChangeHandler} />
        <button type="button" onClick={this.addClickHandler}>Add Beer</button>
      </div>
    );
  }
}

export default BeerInputter;

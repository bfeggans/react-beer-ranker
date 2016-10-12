import React, { Component } from 'react';

class BeerDescription extends Component {
  constructor(props) {
    super(props);
    this.setDescription = this.setDescription.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.state = {inputVal: this.props.beerDescription || ''};
  }

  handleDescriptionChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  setDescription(e) {
    this.props.saveDescription(this.state.inputVal);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputVal} onChange={this.handleDescriptionChange}/>
        <button type="button" onClick={this.setDescription}>Save</button>
      </div>
    )
  }
}

export default BeerDescription;

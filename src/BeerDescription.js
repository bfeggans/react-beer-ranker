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
      <textarea type="text" value={this.state.inputVal} onChange={this.handleDescriptionChange} onBlur={this.setDescription}></textarea>
    )
  }
}

export default BeerDescription;

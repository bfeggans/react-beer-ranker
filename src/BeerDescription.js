import React, { Component } from 'react';

class BeerDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {inputVal: this.props.beerDescription || ''};
  }

  handleDescriptionChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  setDescription(e) {
    this.props.saveDescription(e.target.getAttribute('data-record-id'), this.state.inputVal);
  }

  render() {
    return (
      <textarea type="text"
                value={this.state.inputVal}
                data-record-id={this.props.id}
                onChange={this.handleDescriptionChange.bind(this)}
                onBlur={this.setDescription.bind(this)}>
      </textarea>
    )
  }
}

export default BeerDescription;

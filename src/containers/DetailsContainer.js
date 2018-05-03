import React, { Component } from 'react';
import GiphyModel from '../models/GiphyModel';
import Details from '../components/Details';

class DetailsContainer extends Component {

  state = {
    giph: null,
  }

  componentDidMount = () => {
    let id = this.props.match.params.giphyId;
    console.log(id)
    GiphyModel.searchById(id)
      .then(response => {
        this.setState({
          giph: response.data.data
        })
      })
  }

  render() {
    return (
      <div>
        <Details giph={this.state.giph} />
      </div>
    )
  }
}

export default DetailsContainer;

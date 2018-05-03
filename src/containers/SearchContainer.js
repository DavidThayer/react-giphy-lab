import React, { Component } from 'react';
import GiphyModel from '../models/GiphyModel';
import Search from '../components/Search';
import Results from '../components/Results';

class SearchContainer extends Component {

  state = {
    query: '',
    searching: false,
    results: null,
  }

  handleInput = (event) => {
    // console.log(event.target.value);
    let query = event.target.value;
    this.setState({
      query,
      searching: false
    })
  }

  handleSubmit = (event) => {
    console.log(this.state.query);
    event.preventDefault();
    GiphyModel.search()
      .then(response => {
        console.log(response.data)
        this.setState({
          searching: true,
          results: response.data.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    let results = this.state.searching ? <Results data={this.state.results} /> : null;
    return (
      <div>
        <div>
          <Search
            query={this.state.query}
            onInputChange={this.handleInput}
            onSubmit={this.handleSubmit} />
        </div>
        <section>
          { results }
        </section>
      </div>
    );
  }
}

export default SearchContainer;

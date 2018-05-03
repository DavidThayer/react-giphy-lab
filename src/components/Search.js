import React, { Component } from 'react';

class Search extends Component {

  render() {
    return (
      <div className="container mb-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="form-group">
              <form onSubmit={this.props.onSubmit}>
                <input
                  type="text"
                  name="search"
                  value={this.props.query}
                  className="form-control form-control-lg mb-3"
                  onInput={this.props.onInputChange} />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary float-right" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;

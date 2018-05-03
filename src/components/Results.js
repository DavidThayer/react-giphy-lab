import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Results extends Component {

  render() {
    console.log(this.props.data);
    let results = this.props.data.map(result => {
      let pathname = `/giphy/${result.id}`
      return (
        <div key={result.id} className="col-md-4">
          <div className="card mb-4 box-shadow">
            <img className="card-img-top" src={result.images.fixed_height.url} alt={result.title} width={result.images.fixed_height.width} height={result.images.fixed_height.height} />
            <div className="card-body">
              <p className="card-text">{result.title}.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link className="btn btn-sm btn-outline-secondary" to={pathname}>View</Link>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>  
      )
    })

    return (
      <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              { results }
            </div>
        </div>
      </div>
    )
  }
}

export default Results;

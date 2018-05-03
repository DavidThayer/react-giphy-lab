import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Details extends Component {
  render() {
    console.log(this.props.giph);
    let { giph } = this.props
    let detail;

    if (this.props.giph) {
      detail = (
        <div className="row">
					<div className="col-md-4 mb-3">
						<div className="card">
							<div className="card-body">
								<img src={giph.images.fixed_height.url} alt={giph.title} className="img img-fluid" width={giph.images.fixed_height.width} height={giph.images.fixed_height.height} />
							</div>
						</div>
          </div>

          <div className="col-md-8">
						<div className="card">
							<div className="card-body text-left">
								<h4>{giph.title}</h4>
								<ul className="list-group">
									<li className="list-group-item"><strong>Rating:</strong> {giph.rating}</li>
									<li className="list-group-item"><strong>Source: </strong><Link to={giph.source} target="_blank">View Source </Link></li>
									<li className="list-group-item"><strong>Created:</strong> {giph.import_datetime}</li>
								</ul>
							</div>
						</div>
					</div>
        </div>
      );
    } else {
      detail = <h3>Loading...</h3>
    }

    return (
      <div>
        { detail }
      </div>
    )
  }
}

export default Details;

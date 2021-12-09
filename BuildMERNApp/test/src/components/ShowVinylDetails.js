import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showVinylDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vinyl: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/vinyl/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showVinylDetails-API-response: " + res.data);
        this.setState({
          vinyl: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowVinylDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/vinyl/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowVinylDetails_deleteClick");
      })
  };


  render() {

    const vinyl = this.state.vinyl;
    let VinylItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ vinyl.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Artist</td>
            <td>{ vinyl.artist }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Publisher</td>
            <td>{ vinyl.publisher }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ vinyl.description }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowVinylDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Vinyl List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Vinyl's Record</h1>
              <p className="lead text-center">
                  View Vinyl's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { VinylItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,vinyl._id)}>Delete Vinyl</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-vinyl/${vinyl._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Vinyl
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Vinyl</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Vinyl</button> */}

        </div>
      </div>
    );
  }
}

export default showVinylDetails;
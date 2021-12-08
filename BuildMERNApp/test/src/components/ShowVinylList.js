import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import VinylCard from './VinylCard';

class ShowVinylList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vinyl: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/vinyl')
      .then(res => {
        this.setState({
          vinyl: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowVinylList');
      })
  };


  render() {
    const vinyl = this.state.vinyl;
    console.log("PrintVinyl: " + vinyl);
    let vinylList;

    if(!vinyl) {
      vinylList = "there is no vinyl record!";
    } else {
      vinylList = vinyl.map((vinyl, k) =>
        <VinylCard vinyl={vinyl} key={k} />
      );
    }

    return (
      <div className="ShowVinylList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Vinyls List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-vinyl" className="btn btn-outline-warning float-right">
                + Add New Vinyl
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {vinylList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowVinylList;
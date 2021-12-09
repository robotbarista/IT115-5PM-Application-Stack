import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateVinylInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist: '',
      description: '',
      publisher: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/vinyl/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, vinyl: res.data})
        this.setState({
          title: res.data.title,
          artist: res.data.artist,
          description: res.data.description,
          publisher: res.data.publisher
        })
      })
      .catch(err => {
        console.log("Error from UpdateVinylInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      artist: this.state.artist,
      description: this.state.description,
      publisher: this.state.publisher
    };

    axios
      .put('http://localhost:8082/api/vinyl/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-vinyl/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateVinylInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateVinylInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Vinyl List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Vinyl</h1>
              <p className="lead text-center">
                  Update Vinyl's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Vinyl'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="artist">Artist</label>
              <input
                type='text'
                placeholder='Artist'
                name='artist'
                className='form-control'
                value={this.state.artist}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this artist'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="publisher">Publisher</label>
              <input
                type='text'
                placeholder='Publisher of this Vinyl'
                name='publisher'
                className='form-control'
                value={this.state.publisher}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Vinyl</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateVinylInfo;
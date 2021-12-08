import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateVinyl from './components/CreateVinyl';
import ShowVinylList from './components/ShowVinylList';
import ShowVinylDetails from './components/ShowVinylDetails';
import UpdateVinylInfo from './components/UpdateVinylInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowVinylList} />
          <Route path='/create-vinyl' component={CreateVinyl} />
          <Route path='/edit-vinyl/:id' component={UpdateVinylInfo} />
          <Route path='/show-vinyl/:id' component={ShowVinylDetails} />
        </div>
      </Router>
      
    );
  }
}

export default App;
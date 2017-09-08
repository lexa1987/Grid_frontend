import React, { Component } from 'react';
import UserList from './components/UserList';
import EducationList from './components/EducationList';
import CityList from './components/CityList';
import GridContainer from './components/GridContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="d-flex flex-row justify-content-center">
        <UserList />
        <EducationList />
        <CityList />
      </div>
      <GridContainer />
      </div>
    );
  }
}

export default App;

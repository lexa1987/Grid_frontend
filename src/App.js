import React, { Component } from 'react';
import UserList from './components/UserList';
import GridContainer from './components/GridContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserList />
        <GridContainer />
      </div>
    );
  }
}

export default App;

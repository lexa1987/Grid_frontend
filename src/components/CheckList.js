import React, { Component } from 'react';

class CheckList extends Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  render() {
    return (
      <ul>
        {this.props.list.map(user => {
          console.log(user);
          return <li key={user.id}>{user.fullname}</li>
        })}
      </ul>
    );
  }
}

export default CheckList;
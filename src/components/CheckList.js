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
          return <li key={user.id}>{user.fullname}<input type="checkbox" /></li>
        })}
      </ul>
    );
  }
}

export default CheckList;
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions'


class UserList extends Component {
  componentWillMount() {
    this.props.getUsersList()
  }

  renderUsersList() {
    const users = this.props.users
    if (users.length>0) {
      return (
        <ul>
        {users.map(user => {
          return <li key={user.id}>{user.fullname} <input type="checkbox" checked/></li>
        })}
      </ul>
      )
    }
  }

  render() {
    return (
      <div>
        <h2>Пользователи</h2>
        {this.renderUsersList()}
        <hr />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, actions)(UserList);
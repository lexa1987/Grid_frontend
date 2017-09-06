import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions'

import CheckList from './CheckList';

class UserList extends Component {
  componentWillMount() {
    this.props.getUsersList()
  }

  renderUsersList() {
    const users = this.props.users
    console.log(users);
    if (users.length>0) {
      return (
        <CheckList list={users} />
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
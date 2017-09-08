import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions'


class UserList extends Component {
  componentWillMount() {
    this.props.getUsersList()
  }

  handlerOnChangeCheckbox(userId) {
    this.props.changeCheckedUser(userId);
    this.props.updateGridData(this.props.state);
  }

  renderUsersList() {
    const users = this.props.state.users
    if (users.length>0) {
      return (
        <ul className="list-none">
        {users.map(user => {
          return (
            <li key={user.id}>
              <input 
                type="checkbox" 
                checked={user.checked} 
                onChange={() => this.handlerOnChangeCheckbox(user.id)}/>  {user.fullname}                
            </li>);
        })}
      </ul>
      )
    }
  }

  render() {
    return (
      <div className="mr-auto">
        <h2>Пользователи</h2>
        {this.renderUsersList()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(UserList);
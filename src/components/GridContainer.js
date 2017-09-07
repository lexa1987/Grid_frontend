import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

import * as actions from '../actions/actions'

class Gridcontainer extends Component {
  componentWillMount() {
    this.props.getGridData()
  }

  renderGrid() {
    const grid = this.props.grid
    if (grid.length>0) {
      return (
        <tbody>
        {grid.map(g => {
          return(
            <tr key={g.id}>
              <td>{g.fullname}</td>
              <td>{g.degrees}</td>
              <td>{g.cities}</td>
            </tr>);
        })}
        </tbody>
      )
    }
  }

  render() {
    return (
      <Table>
      <thead>
        <tr>
          <th>Пользователь</th>
          <th>Образование</th>
          <th>Город</th>
        </tr>
      </thead>
      {this.renderGrid()}
    </Table>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    grid: state.grid
  }
}

export default connect(mapStateToProps, actions)(Gridcontainer);
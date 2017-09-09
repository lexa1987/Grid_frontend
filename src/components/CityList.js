import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions'

class CityList extends Component {
  componentWillMount() {
    this.props.getCity()
  }

  handlerOnChangeCheckbox(city) {
    this.props.changeCheckedCity(city);
    this.props.updateGridData(this.props.state);
  }

  renderCityList() {
    const city = this.props.state.city
    if (city.length>0) {
      return (
        <ul className="list-none">
        {city.map(c => {
          return (
            <li key={c.name}>
              <input 
                type="checkbox" 
                checked={c.checked} 
                onChange={() => this.handlerOnChangeCheckbox(c.name)}/>  {c.name}                
            </li>);
        })}
      </ul>
      )
    }
  }

  render() {
    return (
      <div className="mr-auto">
        <h2>Город</h2>
        {this.renderCityList()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(CityList);
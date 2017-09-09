import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions'

class EducationList extends Component {
  componentWillMount() {
    this.props.getDegree()
  }

  handlerOnChangeCheckbox(degree) {
    this.props.changeCheckedDegree(degree);
    this.props.updateGridData(this.props.state);
  }

  renderEduList() {
    const education = this.props.state.education
    if (education.length>0) {
      return (
        <ul className="list-none">
        {education.map(e => {
          return (
            <li key={e.degree}>
              <input 
                type="checkbox" 
                checked={e.checked} 
                onChange={() => this.handlerOnChangeCheckbox(e.degree)}/>  {e.degree}                
            </li>);
        })}
      </ul>
      )
    }
  }

  render() {
    return (
      <div className="mr-auto">
        <h2>Образование</h2>
        {this.renderEduList()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(EducationList);
import React, { Component } from 'react'
import './App.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Icon extends Component {
  render() {
    return (
      <div key={this.props.IconProperties.name}>
        <FontAwesomeIcon icon={this.props.IconProperties.name} size="lg" id={this.props.IconProperties.name} />
      </div>
    )
  }
}

export default Icon

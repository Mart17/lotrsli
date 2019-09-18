import React, { Component } from 'react'
import './App.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Icon extends Component {
  constructor() {
    super()

    this.state = { clicked: false }
  }

  toggleClicked = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked
    }))

    this.props.toggleAudio()
  }

  render() {
    const isClicked = function(clicked) {
      return clicked === true ? 'Clicked' : 'Unclicked'
    }

    return (
      <div className={isClicked(this.state.clicked)}>
        <FontAwesomeIcon
          icon={this.props.name}
          size="lg"
          className="Audio-icon"
          onClick={() => this.toggleClicked()}
        />
      </div>
    )
  }
}

export default Icon

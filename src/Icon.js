import React, { Component } from 'react'
import './App.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Icon extends Component {
  constructor(props) {
    super(props)
    this.state = { name: props.IconProperties.name,
                   audio_url: props.IconProperties.audio_url,
                   isPlaying: false,
                   volume: 50
                 }
  }

  toggleAudio() {
    this.setState((prevState) => ({
      isPlaying: !prevState.isPlaying
    }))
  }

  render() {
    const audioIsPlaying = function(isPlaying) {
      return isPlaying === true ? 'Playing' : 'Muted'
    }

    return (
      <div className={audioIsPlaying(this.state.isPlaying)}>
        <FontAwesomeIcon
          icon={this.state.name}
          size="lg"
          className="Audio-icon"
          onClick={() => this.toggleAudio()}
        />
      </div>
    )
  }
}

export default Icon

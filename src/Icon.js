import React, { Component } from 'react'
import './App.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Icon extends Component {
  constructor(props) {
    super(props)
    this.audio         = new Audio()
    this.audio.preload = 'none'
    this.audio.src     = props.IconProperties.audio_url
    this.audio.loop    = true

    this.state = { isPlaying: false, volume: 50 }
  }

  toggleAudio() {
    this.setState((prevState) => ({
      isPlaying: !prevState.isPlaying
    }))
  }

  render() {
    this.state.isPlaying === true ? this.audio.play() : this.audio.pause()

    const audioIsPlaying = function(isPlaying) {
      return isPlaying === true ? 'Playing' : 'Muted'
    }

    return (
      <div className={audioIsPlaying(this.state.isPlaying)}>
        <FontAwesomeIcon
          icon={this.props.IconProperties.name}
          size="lg"
          className="Audio-icon"
          onClick={() => this.toggleAudio()}
        />
      </div>
    )
  }
}

export default Icon

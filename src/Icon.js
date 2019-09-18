import React, { Component } from 'react'
import './App.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import VolumeSlider from './VolumeSlider'

class Icon extends Component {
  constructor(props) {
    super(props)
    this.audio         = new Audio()
    this.audio.preload = 'none'
    this.audio.src     = props.IconProperties.audio_url
    this.audio.loop    = true

    this.state = { isPlaying: false, volume: 0.5 }
  }

  toggleAudio = () => {
    this.setState((prevState) => ({
      isPlaying: !prevState.isPlaying
    }))
  }

  changeVolume = (newVolume) => {
    this.setState({ volume: newVolume })
  }

  render() {
    this.state.isPlaying === true ? this.audio.play() : this.audio.pause()
    this.audio.volume = this.state.volume

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
      <VolumeSlider changeVolume={this.changeVolume} />
      </div>
    )
  }
}

export default Icon

import React, { Component } from 'react'
import './stylesheets/App.scss'

import Icon from './Icon'
import VolumeSlider from './VolumeSlider'

class IconAudioContainer extends Component {
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

    return (
      <div>
        <Icon name={this.props.IconProperties.name} toggleAudio={this.toggleAudio} />
        <VolumeSlider changeVolume={this.changeVolume} hidden={!this.state.isPlaying}/>
      </div>
    )
  }
}

export default IconAudioContainer

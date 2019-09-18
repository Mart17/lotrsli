import React from 'react'
import './App.scss'

function VolumeSlider(props) {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        defaultValue = "0.5"
        onChange={(e) => props.changeVolume(e.target.value)}
      />
  </div>
  )
}

export default VolumeSlider

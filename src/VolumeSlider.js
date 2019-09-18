import React from 'react'
import './App.scss'

function VolumeSlider() {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
      />
  </div>
  )
}

export default VolumeSlider

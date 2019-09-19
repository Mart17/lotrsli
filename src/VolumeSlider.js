import React from 'react'
import './stylesheets/App.scss'
import './stylesheets/Slider.scss'

function VolumeSlider(props) {
  return (
    <form>
      <div className="Slider-wrapper form-group">
        <div className={props.hidden === true ? "Hidden" : ""}>
          <input
            type="range"
            className="form-control-range"
            min="0"
            max="1"
            step="0.01"
            defaultValue = "0.5"
            onChange={(e) => props.changeVolume(e.target.value)}
          />
      </div>
    </div>
  </form>
  )
}

export default VolumeSlider

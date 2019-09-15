import React from 'react'
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function IconGroup() {
  const icons = {
    row1: ['music', 'cloud-rain', 'dove'],
    row2: ['hat-wizard', 'fire-alt', 'wind']
  }

  const displayIcons = (row) => {
    return row.map((iconName) => {
      return (
        <span className="Icon" key={iconName}>
          <FontAwesomeIcon icon={iconName} size="lg" id={iconName} />
        </span>
      )
    })
  }

  return (
    <div className="Icon-group">
      {displayIcons(icons.row1)}
      <br />
      {displayIcons(icons.row2)}
    </div>
  )
}

export default IconGroup

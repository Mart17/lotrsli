import React from 'react'
import './App.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function IconTable() {
  const icons = {
    row1: ['music', 'cloud-rain', 'dove'],
    row2: ['hat-wizard', 'fire-alt', 'wind']
  }

  const displayIcons = (row) => {
    return row.map((iconName) => {
      return (
        <td className="Icon" key={iconName}>
          <FontAwesomeIcon icon={iconName} size="lg" id={iconName} />
        </td>
      )
    })
  }

  return (
    <div className="Table-responsive">
      <table className="Table">
        <tbody>
          <tr>
            {displayIcons(icons.row1)}
          </tr>
          <tr>
            {displayIcons(icons.row2)}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default IconTable

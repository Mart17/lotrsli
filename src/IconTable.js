import React from 'react'
import './App.scss'

import Icon from './Icon'

function IconTable() {
  const icons = {
    row1: [
            { name: 'music', audio_url: '' },
            { name: 'cloud-rain', audio_url: '' },
            { name: 'dove', audio_url: '' }
          ],
    row2: [
            { name: 'hat-wizard', audio_url: '' },
            { name: 'fire-alt', audio_url: '' },
            { name: 'wind', audio_url: '' }
          ]
  }

  const displayIcons = (row) => {
    return row.map((icon) => {
      return (
        <td className="Icon" key={icon.name}>
          <Icon IconProperties={icon} />
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

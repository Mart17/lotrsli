import React from 'react'
import './stylesheets/App.scss'

import music   from './audio/shire.mp3';
import rain    from './audio/rain.mp3';
import bids    from './audio/birds.mp3';
import gandalf from './audio/gandalf.mp3';
import fire    from './audio/fire.mp3';
import wind    from './audio/wind.mp3';

import IconAudioContainer from './IconAudioContainer'

function IconTable() {
  const icons = {
    row1: [
            { name: 'music',      audio: music },
            { name: 'cloud-rain', audio: rain },
            { name: 'dove',       audio: bids }
          ],
    row2: [
            { name: 'hat-wizard', audio: gandalf },
            { name: 'fire-alt',   audio: fire },
            { name: 'wind',       audio: wind }
          ]
  }

  const displayIcons = (row) => {
    return row.map((icon) => {
      return (
        <td className="Icon" key={icon.name} align="center">
          <IconAudioContainer IconProperties={icon} />
        </td>
      )
    })
  }

  return (
    <div className="Table-responsive">
      <table className="table">
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

import React from 'react'
import './stylesheets/App.scss'

import IconAudioContainer from './IconAudioContainer'

function IconTable() {
  const icons = {
    row1: [
            { name: 'music', audio_url: 'https://lotrsli.s3.eu-central-1.amazonaws.com/audio/shire.mp3' },
            { name: 'cloud-rain', audio_url: 'https://lotrsli.s3.eu-central-1.amazonaws.com/audio/rain.mp3' },
            { name: 'dove', audio_url: 'https://lotrsli.s3.eu-central-1.amazonaws.com/audio/birds.mp3' }
          ],
    row2: [
            { name: 'hat-wizard', audio_url: 'https://lotrsli.s3.eu-central-1.amazonaws.com/audio/gandalf.mp3' },
            { name: 'fire-alt', audio_url: 'https://lotrsli.s3.eu-central-1.amazonaws.com/audio/fire.mp3' },
            { name: 'wind', audio_url: 'https://lotrsli.s3.eu-central-1.amazonaws.com/audio/wind.mp3' }
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

import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMusic, faCloudRain, faDove, faHatWizard, faFireAlt, faWind } from '@fortawesome/free-solid-svg-icons'

import IconTable from './IconTable'

function App() {
  return (
    <div className="App">
      <header>
        <div className="Site-title ">Lotrsli</div>
      </header>
      <br />
      <IconTable />
      <video id="App-video" autoPlay muted loop onContextMenu={(e) => e.preventDefault()}>
        <source src={"https://lotrsli.s3.eu-central-1.amazonaws.com/video/shire_mute.mp4"} type="video/mp4" />
      </video>
    </div>
  )
}

library.add(faMusic, faCloudRain, faDove, faHatWizard, faFireAlt, faWind)

export default App

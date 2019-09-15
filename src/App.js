import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <div className="Site-title ">Lotrsli</div>
      </header>
      <br />
      <video id="App-video" autoPlay muted loop onContextMenu={(e) => e.preventDefault()}>
        <source src={"https://lotrsli.s3.eu-central-1.amazonaws.com/video/shire_mute.mp4"} type="video/mp4" />
      </video>
    </div>
  )
}

export default App

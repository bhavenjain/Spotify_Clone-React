import React from 'react'
import Header from './Header.js'
import { useDataLayerValue } from '../DataLayer.js'
import './css/Body.css'

function Body ({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue()
  console.log(discover_weekly)
  return (
    <div className='body'>
      <Header />
      <div className='body__info'>
        <img src={discover_weekly?.images[0].url} alt='' />
        <div className='body__infoText'>
          <strong>Playlist</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Body

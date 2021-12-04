import React, { useEffect } from 'react'
import Login from './Components/Login'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Components/Player'
import './public/css/App.css'
import { useDataLayerValue } from './DataLayer'

// e0fcd052853c4a73981582ebc89031b6
const spotify = new SpotifyWebApi()

function App () {
  const [{ user, token }, dispatch] = useDataLayerValue()

  // Run code based on a given condition
  useEffect(() => {
    // code ..
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user
        })
      })

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })

      spotify.getPlaylist().then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      })
    }
  }, [])

  console.log(token)
  return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  )
}

export default App

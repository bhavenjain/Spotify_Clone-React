import React from 'react'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from '../DataLayer'
import './css/Sidebar.css'

function Sidebar () {
  const [{ playlists }, dispatch] = useDataLayerValue()

  return (
    <div className='sidebar'>
      <img
        className='sidebar__logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='Spotify Logo'
      />

      <SidebarOption Icon={HomeIcon} title='Home' />
      <SidebarOption Icon={SearchIcon} title='Search' />
      <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />
      <strong className='sidebar__title'>Playlists</strong>
      <hr />
      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
      ))}
      <SidebarOption title='Rock' />
      <SidebarOption title='Soft-Rock' />
      <SidebarOption title='Hard-Rock' />
      <SidebarOption title='Alternate-Rock' />
      <SidebarOption title='Punk Rock' />
      <SidebarOption title='Metal' />
    </div>
  )
}

export default Sidebar

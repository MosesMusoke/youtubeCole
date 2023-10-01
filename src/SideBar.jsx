import React from 'react'
import './SideBar.css'
import SideBarRow from './SideBarRow'
import { ExpandMore, History, Home, OndemandVideo, Subscriptions, ThumbUpAlt, VideoLibrary, WatchLater, Whatshot } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sideBar'>

        {/* Row Component */}
        <Link to={'/'}><SideBarRow selected title = 'Home' Icon = {Home}/></Link>
        <Link to={'/trending'}><SideBarRow title = 'Trending' Icon = {Whatshot}/></Link>
        <Link to={'/subscriptions'}><SideBarRow title = 'Subscriptions' Icon = {Subscriptions}/></Link>
        <hr />
        <Link to={'/library'}><SideBarRow title = 'Library' Icon = {VideoLibrary}/></Link>
        <Link to={'/history'}><SideBarRow title = 'History' Icon = {History}/></Link>
        <Link to={'/yourVideos'}><SideBarRow title = 'Your Videos' Icon = {OndemandVideo}/></Link>
        <Link to={'/watchLater'}><SideBarRow title = 'Watch Later' Icon = {WatchLater}/></Link>
        <Link to={'/likedVideos'}><SideBarRow title = 'Liked Videos' Icon = {ThumbUpAlt}/></Link>
        <Link to={'/showMore'}><SideBarRow title = 'Show More' Icon = {ExpandMore}/></Link>
        <hr />

    </div>
  )
}

export default SideBar

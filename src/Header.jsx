import { Apps, Menu, Notifications, Search, VideoCall } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  const [inputValue, setInputValue] = useState('')

  return (
    <div className='header'>
      <div className="headerLeft">
        <Menu />
        <Link to='/'>
          <img className='headerLogo' src="./src/assets/logo.png" alt="" />
        </Link>
      </div>

      <div className="headerInput">
        <input onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder='Search' type="text" name="" />
        <Link to={`/search/${inputValue}`}><Search className='headerInputButton' /></Link>
      </div>
      
      <div className="headerRight">
        <VideoCall className='headerIcon'/>
        <Apps className='headerIcon'/>
        <Notifications className='headerIcon'/>
        <Avatar src='./src/assets/avatar.jpg' alt='moses musoke avatar'/>
      </div>
      
    </div>
  )
}

export default Header


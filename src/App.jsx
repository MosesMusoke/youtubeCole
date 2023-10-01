import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import SideBar from './SideBar'
import Videos from './Videos'
import Search from './SearchPage'
import Trending from './Trending'
import Subscriptions from './Subscriptions'
import Library from './Library'
import History from './History'
import YourVideos from './YourVideos'
import LikedVideos from './LikedVideos'
import WatchLater from './WatchLater'
import { Link, Route, Routes } from 'react-router-dom'
import SearchPage from './SearchPage'

function App() {
  

  return (
    <div className='app'>

      {/* Header */}
      <Header />

      <div className="mainDisplay">
        {/* SideBar */}
        <SideBar />

        <div className="optional">
          
          <Routes>
            <Route path='/' element={<Videos />} />
            <Route path='/search/:searchTerm' element={<SearchPage />} />
            <Route path='/trending' element={<Trending />} />
            <Route path='/subscriptions' element={<Subscriptions />} />
            <Route path='/library' element={<Library />} />
            <Route path='/history' element={<History />} />
            <Route path='/yourVideos' element={<YourVideos />} />
            <Route path='/likedVideos' element={<LikedVideos />} />
            <Route path='/watchLater' element={<WatchLater />} />
          </Routes>

        </div>


        
      </div>
      
    </div>
  )
}

export default App

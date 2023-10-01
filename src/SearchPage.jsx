import React from 'react'
import './SearchPage.css'
import { TuneOutlined } from '@mui/icons-material'
import ChannelRow from './ChannelRow'
import VideosRow from './VideosRow'

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className="searchPageFilter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow 
        image = 'https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
        channel = "Knowledge and Wisdom"
        verified
        subs = "1M"
        noOfVideos = {300}
        description = "You can find knowledge and wisdom based videos here" 
      />

      <hr />

      <VideosRow 
        views = '1.4'
        subs = '654k'
        description = 'Strange football moments that shook the world. Donot miss out!!!'
        timestamp = '4 months ago'
        channel = 'Football Fun'
        title = 'Harry Maguire Vs Messi'
        image = 'https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
      />
      <VideosRow 
        views = '1.4'
        subs = '654k'
        description = 'Strange football moments that shook the world. Donot miss out!!!'
        timestamp = '4 months ago'
        channel = 'Football Fun'
        title = 'Harry Maguire Vs Messi'
        image = 'https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
      />
      <VideosRow 
        views = '1.4'
        subs = '654k'
        description = 'Strange football moments that shook the world. Donot miss out!!!'
        timestamp = '4 months ago'
        channel = 'Football Fun'
        title = 'Harry Maguire Vs Messi'
        image = 'https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
      />
      <VideosRow 
        views = '1.4'
        subs = '654k'
        description = 'Strange football moments that shook the world. Donot miss out!!!'
        timestamp = '4 months ago'
        channel = 'Football Fun'
        title = 'Harry Maguire Vs Messi'
        image = 'https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
      />
      <VideosRow 
        views = '1.4'
        subs = '654k'
        description = 'Strange football moments that shook the world. Donot miss out!!!'
        timestamp = '4 months ago'
        channel = 'Football Fun'
        title = 'Harry Maguire Vs Messi'
        image = 'https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
      />
      <VideosRow 
        views = '1.4'
        subs = '654k'
        description = 'Strange football moments that shook the world. Donot miss out!!!'
        timestamp = '4 months ago'
        channel = 'Football Fun'
        title = 'Harry Maguire Vs Messi'
        image = 'https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
      />
      <VideosRow 
        views = '1.4'
        subs = '654k'
        description = 'Strange football moments that shook the world. Donot miss out!!!'
        timestamp = '4 months ago'
        channel = 'Football Fun'
        title = 'Harry Maguire Vs Messi'
        image = 'https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q'
      />

    </div>
  )
}

export default SearchPage

import { Avatar } from '@mui/material'
import React from 'react'

const VideoCard = ({image, title, channel, views, timestamp, channelImage}) => {
  return (
    <div className='videoCard'>
      <img className='videoCardThumbnail' src={image} alt="video image" />
      <div className="videoCardInfo">
        <Avatar src={channelImage} alt={channel} className='videoCardAvatar' />
        <div className="videoText">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard

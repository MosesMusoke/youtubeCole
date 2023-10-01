import React from 'react'

const VideosRow = ({title, image, channel, timestamp, description, subs, views}) => {
  return (
    <div className='videosRow'>
      <img src={image} alt="" />
      <div className="videosRowText">
        <h3>{title}</h3>
        <p className='videosRowHeadline'>
            {channel} . <span className='videosRowSubscribers'><span className='videosRowSubsNumber'>{subs}</span> subscribers</span> {views} views . {timestamp}
        </p>
        <p className='videosRowDescription'>{description}</p>
      </div>
    </div>
  )
}

export default VideosRow

import { CheckCircleOutlineOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'

const ChannelRow = ({image, channel, verified, subs, noOfVideos, description}) => {
  return (
    <div className='channelRow'>
      <Avatar className='channelRowLogo' src={image} alt={channel} />

      <div className="channelRowText">
        <h4>{channel}{verified && <CheckCircleOutlineOutlined /> }</h4>
        <p>{subs} subscribers . {noOfVideos} videos</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow

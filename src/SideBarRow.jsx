import React from 'react'

const SideBarRow = ({title, Icon, selected}) => {
  return (
    <div className={`sideBarRow ${selected && "selected"}`}>
        <Icon className='sideBarRowIcon' />
        <h2 className='sideBarRowTitle'>{title}</h2>
    </div>
  )
}

export default SideBarRow

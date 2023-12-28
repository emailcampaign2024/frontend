import React from 'react'

const DashboardHeader = ({heading}) => {
  return (
    <div className='h-12 pl-14 bg-fadedBg  font-semibold text-textDark flex items-center  border-b-borderColor border-b'>{heading}</div>
  )
}

export default DashboardHeader
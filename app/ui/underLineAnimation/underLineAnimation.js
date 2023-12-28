import React from 'react'

const UnderLineAnimation = ({bgColor='bg-secondary', bottom='bottom-2', width='w-[85%]'}) => {
  return (
    <span className={`absolute ${width} mx-auto inset-x-0 ${bottom} rounded-md h-[1.5px] ${bgColor}  origin-left transition-all duration-300 transform scale-x-0 group-hover:scale-x-100`}></span>
  )
}

export default UnderLineAnimation
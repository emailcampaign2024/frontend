import React from 'react'
import CircularWithValueLabel from '../circularProgressBar/circularProgressBar'

const EmailCampaignCard = () => {
  return (
    <div className="w-[95%] h-16 flex justify-between items-center my-1 px-4 py-2 mx-4 font-semibold text-sm  rounded-lg email-account-card-shadow border border-gray-100 cursor-pointer ">
    <div className="h-full flex items-center gap-3 min-w-[30%]">
      <CircularWithValueLabel value={10} />
      <div className='flex flex-col h-full space-y-1'>
      <p className='text-primaryDark'>Campaign name</p>
      <p className='text-xs text-textSoft'><span>Progress status</span> | <span>created at</span></p>
      </div>
    </div>
    <div className="flex items-center justify-between gap-10 min-w-[20%]">
      <div className='flex flex-col justify-start'>sent</div>
      <div className='flex flex-col justify-start'>opened</div>
      <div className='flex flex-col justify-start'>clicked</div>
      <div className='flex flex-col justify-start'>replied</div>
    </div>
    <div className="flex items-center justify-end space-x-8 min-w-[30%]">
     
    </div>
  </div>
  )
}

export default EmailCampaignCard
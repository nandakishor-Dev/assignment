import React from 'react'



export const SidebarOption = ({ image, text }) => {
  return (
    <div className='flex  gap-4 items-center  justify-center cursor-pointer'>
      <div className='w-3/2   flex justify-end'>
        <img className='h-6 w-6 object-cover' src={image} alt="" />
      </div>
      <div className='w-1/2'>
        <span className={`font-nunito font-base font-semibold ${text === "Upload" ? 'text-blue-600' : ''}`}>
          {text}
        </span>
      </div>
    </div>
  )
}

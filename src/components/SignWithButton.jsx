import React from 'react'

export const SignWithButton = ({ image, text }) => {
    return (
        <div className='bg-white flex flex-row gap-3 w-1/2 p-1 rounded-lg align-middle cursor-pointer'>
            <div className=' flex align-middle justify-center items-center'>
                <img className='h-4' src={image} alt="" />
            </div>
            <span className='font-montserrat text-xs opacity-50'>{text}</span>
        </div>
    )
}

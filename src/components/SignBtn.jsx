import React from 'react'

export const SignWithButton = ({ image, text }) => {
    return (
        <div className='bg-white flex flex-row gap-3 w-1/2 p-1 rounded-lg align-middle'>
            <div className=' flex align-middle justify-center items-center'>
                <img className='h-4' src={image} alt="" />
            </div>
            <span>{text}</span>
        </div>
    )
}

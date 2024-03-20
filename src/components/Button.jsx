import React from 'react'

export const Button = ({ text }) => {
    return (
        <>
            <button type='submit' className='bg-[#605bff] text-[white] border-[none] rounded-[10px] w-full h-full font-semibold font-montserrat'>{text}</button>
        </>
    )
}

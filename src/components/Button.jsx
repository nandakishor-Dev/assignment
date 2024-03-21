import React from 'react'
import PropTypes from 'prop-types';

export const Button = ({ text,handleClick }) => {
    return (
        <>
            <button type='submit' onClick={handleClick} className='bg-[#605bff] text-[white] border-[none] rounded-[10px] w-full h-full font-semibold font-montserrat'>{text}</button>
        </>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func
};

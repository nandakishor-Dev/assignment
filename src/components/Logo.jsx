import React from 'react'
import vector7 from '../assets/images/Vector7.png'
import Ellipse from '../assets/images/Ellipse 111.png'

export const Logo = () => {
    return (
        <div className='relative '>
            <img src={Ellipse} alt="" class="absolute top-0 left-1 bg-no-repeat" />
            <img src={vector7} alt="" class="absolute top-6 left-0 object-cover bg-no-repeat" />
        </div>
    )
}

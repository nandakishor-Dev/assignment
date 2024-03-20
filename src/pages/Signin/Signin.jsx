import React from 'react'
import styles from './signin.module.css'
import { Login } from '../../components/Login'
import googleIcon from '../../assets/images/googleicon1.png'
import appleIcon from '../../assets/images/apple 1.png'

import socialIcons from '../../assets/images/github.png'

import { SignWithButton } from '../../components/SignWithButton'
import { Logo } from '../../components/Logo'

export const Signin = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <div className='h-1/5 pl-8 pt-8'>
                    <Logo />
                </div>
                <div className='h-3/4  flex items-center ml-56'>
                    <p className='font-montserrat font-bold text-7xl text-white'>BASE</p>
                </div>
                <div className='h-1/5 flex ml-44 pt-10'>
                    <img className='h-11' src={socialIcons} alt="" />
                </div>

            </div>
            <div className={styles.rightSection}>
                <div className={styles.signSection}>
                    <div className={styles.firstSection}>
                        <div className='flex gap-1 flex-col'>
                            <p className='font-montserrat font-bold text-4xl'>Sign in</p>
                            <p className='font-lato font-bold text-base'>Sign in to your account</p>
                        </div>
                        {/* border border-red-300 */}
                        <div className='flex gap-2'>
                            <SignWithButton image={googleIcon} text="Sign in with google" />
                            <SignWithButton image={appleIcon} text="Sign in with apple" />
                        </div>
                    </div>
                    <div className={styles.secondSection}>

                        <Login />
                    </div>
                    <div className={styles.thirdSection}>
                        <span>Don’t have an account?  </span> <span className="text-blue-500 pl-1 cursor-pointer"> Register here</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import styles from './signin.module.css'
import { Login } from '../../components/Login'
import googleicon1 from '../../assets/images/googleicon1.png'
import { SignWithButton } from '../../components/SignBtn'

export const Signin = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>

            </div>
            <div className={styles.rightSection}>
                <div className={styles.signSection}>
                    <div className={styles.firstSection}>
                        <div>
                            <p>Sign in</p>
                            <p>Sign in to your account</p>
                        </div>
                        {/* border border-red-300 */}
                        <div className='flex gap-2'>
                            <SignWithButton image={googleicon1} text="Sign with google" />
                            <SignWithButton image={googleicon1} text="Sign with apple" />
                        </div>
                    </div>
                    <div className={styles.secondSection}>

                        <Login />
                    </div>
                    <div className={styles.thirdSection}>
                        <span>Don’t have an account?  </span> <span className="text-blue-500 pl-1"> Register here</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

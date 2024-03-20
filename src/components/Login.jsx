import React from 'react'
import styles from './login.module.css'
import { Button } from './Button'

export const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.sections}>
                <p>Email address</p>
                <input type="text" />
            </div>
            <div className={styles.sections}>
                <p>Password</p>
                <input type="text" />
            </div>
            <div className={styles.sections}>
                <p className='text-blue-500 '>Forgot password?</p>
                <div className={styles.btnContainer}>

                    <Button text={"Sign in"} />
                </div>
            </div>

        </div>
    )
}

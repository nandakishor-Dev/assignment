import React from "react";
import styles from "./login.module.css";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = () => navigate("/dashboard")
    return (
        <div className={styles.loginContainer}>
            <form onSubmit={handleSubmit}>

                <div className={styles.sections}>
                    <p className="font-lato text-base font-normal">Email address</p>
                    <input required type="email" />
                </div>
                <div className={styles.sections}>
                    <p className="font-lato text-base font-normal">Password</p>
                    <input required type="password" />
                </div>
                <div className={styles.sections}>
                    <p className="text-blue-500 font-normal font-lato text-base cursor-pointer ">
                        Forgot password?
                    </p>
                    <div className={styles.btnContainer}>
                        <Button text={"Sign in"} />
                    </div>
                </div>
            </form>
        </div>
    );
};

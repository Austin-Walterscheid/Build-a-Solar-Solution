import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './HomeScreen.module.css'

const LoginScreen = () => {
    const navigate = useNavigate()
    return(
        <div>
            <h1>Login Screen</h1>
            <button onClick={() => navigate('/signup')} className={styles.SignUp}>Sign Up</button>
        </div>
    )
}

export default LoginScreen;
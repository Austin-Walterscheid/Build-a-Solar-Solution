import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import styles from './LoginScreen.module.css'
import { auth } from '../firebase';
import Header from '../components/Header';



const LoginScreen = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState('')

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        } catch (error) {
            console.log(error.message)
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        } catch (error) {
            console.log(error.message)
        }
    };

    const logout = async () => {
        await signOut(auth)
    };

    const navigate = useNavigate()
    return (
        <div className={styles.secondContainer}>
            <div className={styles.mainContainer}>
                <Header />
                <div className={styles.topContainer}>

                </div>
                <div className={styles.bottomContainer}>
                    <h1> Login </h1>
                    <input placeholder='Email...' onChange={(event) => { setLoginEmail(event.target.value) }} />
                    <input placeholder='Password...' onChange={(event) => { setLoginPassword(event.target.value) }} />
                </div>
                    <button onClick={() => {login(); navigate("/")}} route>Login</button>
                <h4> {user?.email} is signed in</h4>
                {/* {user?.email} */}

                <button onClick={logout}>Sign out</button>
            <div className={styles.registerHere}>
                <h4>Don't have an account?</h4>
    <h1>Register</h1>
    <input placeholder='Email...' onChange={(event) => { setRegisterEmail(event.target.value) }} />
    <input placeholder="Password..." onChange={(event) => { setRegisterPassword(event.target.value) }} />
<button onClick={register}>Sign Up</button>
            </div>
            </div>
        </div>
    )
}

export default LoginScreen;
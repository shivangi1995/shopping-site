import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState(''); //hooks

    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault(); //this stops the refresh
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in and rendirect to homepage
                history.push('/');

            })
            .catch(e => alert(e.message));

    }

    const register = (e) => {
        e.preventDefault(); //this stops the refresh
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //create the user, logged in and rendirect to homepage
                history.push('/');

            })
            .catch(e => alert(e.message));

    }


    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
                    alt=''
                />
            </Link>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type='email' value={email} onChange={event => setEmail(event.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={event => setPassword(event.target.value)} />
                    <button type='submit' className='login__signInButton' onClick={login}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Condition of Use & Sale. Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice.
                </p>
                <button className='login__registerButton' onClick={register}> Create your Amazon Account </button>


            </div>

        </div>
    )
}

export default Login

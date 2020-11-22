import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import Button from '../components/Button';
import Message from '../components/Message';

const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { error, userInfo } = userLogin;

    const redirect = location.search ? location.search.split("=")[1] : '/';

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }


    }, [history, userInfo, redirect]);

    const submitHandler = e => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <div className="login">
            <div className="login-container">
                <h1 className="login-title">Welcome</h1>
                <p className="login-subtitle">Please login to your account</p>
                <form onSubmit={submitHandler} className="login-form">
                    <label htmlFor="email">Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <Button text="Sign In" />
                </form>

                <p>New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link></p>

                {error && <Message>{error}</Message>}
            </div>
        </div>
    )
}

export default LoginScreen;

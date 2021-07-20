import React, {useState} from 'react';
import './Signin.css';
import {Link, useHistory } from "react-router-dom";

const loginData = [
    {
        id: 1,
        username: 'dosen',
        password: 'dosen'
    },
    {
        id: 2,
        username: 'uple',
        password: 'dosen'
    }
]

const Signin = () => {
    let history = useHistory();
    const[username,setUsername]= useState('');
    const[password,setPassword]= useState('');

    const onChangeUsername = (e) => {
        const value =e.target.value
         setUsername(value)
    }
    const onChangePassword = (e) => {
        const value =e.target.value
        setPassword(value)
    }

    const handleSignIn = () => {
        let isCorrect = [];
        isCorrect = loginData.filter(data => {
            return data.username === username && data.password === password;
        })
        if (isCorrect.length > 0) {
            if (isCorrect[0].username === 'dosen') {
                
                history.push('/dashboard')
            } else {
                
                history.push('/dashboardMhs')
            }
        } else {
            alert('password / username salah')
        }
    }
    return (
            <div className="form-container-login">  
                <div className="form-login-right"> 
                    <img className="login-img" src="images/login.svg" alt="spaceship"/>
                </div>
                <div className="form-login-left">
                <Link className='link'to="/Signup"> <a href ="#">SIGN UP</a> </Link> 
                    <h4>Sign In</h4>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={username} onChange={onChangeUsername}/>
                        <label for="floatingInput">Email</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Enter password" value={password} onChange={onChangePassword}/>
                        <label for="floatingPassword">Password</label>
                    </div>

                    <button onClick={() => handleSignIn()} type="submit" className="form-input-btn"> SIGN IN </button>{' '}
                </div>
            </div> 
       
          
    )
}

export default Signin
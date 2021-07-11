import React, {useState} from 'react';
import './Signin.css';


const Signin = () => {
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
    return (         
        <div className="form-container-login">  
            <div className="form-login-right"> 
                <img className="login-img" src="img/login.svg" alt="spaceship"/>
            </div>
            <div className="form-login-left">
                <h4>Sign In</h4>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={username} onChange={onChangeUsername}/>
                    <label for="floatingInput">Email</label>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Enter password" value={password} onChange={onChangePassword}/>
                    <label for="floatingPassword">Password</label>
                </div>

                <button type="submit" className="form-input-btn"> SIGN IN </button>{' '}
            </div>
        </div>             
          
    )
}

export default Signin
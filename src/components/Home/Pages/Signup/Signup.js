import React, {useState} from 'react';
import {Link } from "react-router-dom";
import './Signup.css';

const Signup = () => {
    const[username,setUsername]= useState('');
    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');

    const changeUsername = (e) =>{
        const value = e.target.value
        setUsername(value)
    } 
    const changeEmail = (e) =>{
        const value = e.target.value
        setEmail(value)
    }
    const changePassword = (e) =>{
        const value = e.target.value
        setPassword(value)
    }
    return(
        <div className="form-container-register"> 
            <div className="form-content-left">
                <img className="form-img" src="images/regis.svg" alt='spaceship'/>
            </div>
                    
            <div className="form-content-right"> 
          
                    <h4>Sign Up</h4>
                    <div className="form-floating">                      
                        <input type="username" class="form-control" id="floatingInput" placeholder="Enter username" value={username} onChange={changeUsername} />
                        <label for ="floatingInput">Username</label>
                    </div>

                    <div className="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="Enter email"  value={email} onChange={changeEmail} />
                        <label for ="floatingInput">Email</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Enter password" value={password} onChange={changePassword} />  
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button type="submit" className="form-input-btn">Signup</button>{' '}
                    <span className= "form-input-login"> 
                        <h5>Already have an account? Login <Link to="/Signin"> <a href ="#">Here</a> </Link> </h5>  
                    </span>
            </div>
        </div>
                    
    )
}
export default Signup
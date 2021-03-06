import React, {useState} from 'react'
import Login from './Login'
import Register from './Register'
import "./LoginRegister.css"

export default function LoginRegister() {

    const[isLoginForm, setLoginForm] = useState(true)

    const changeToRegister = () =>{
        setLoginForm(!isLoginForm)
    }

    const changeToLogin = () =>[
        setLoginForm(!isLoginForm)
    ]

  return (
    <div className='app-container'>
        <img className='workout-image' src="https://img.freepik.com/free-vector/athletes-doing-fitness-exercise-gym-with-panoramic-windows-isolated-flat-vector-illustration-cartoon-people-cardio-training-weight-lifting_74855-8225.jpg?t=st=1647401572~exp=1647402172~hmac=eeb0ef11e13e8a5915ff749c640181cebfe33d919dc9aa9ec3cebb7fa1a57536&w=1060" alt="workout" />
        {isLoginForm ? 
        <div className='form-container shadow'>
            <Login/>
            <p className='text'>Don't have an account? <button className='reg-btn' onClick={changeToRegister}>Register</button></p>
        </div> 
        :
        <div className='form-container shadow'>
            <Register/>
            <p className='text'>Have already an account? <button className='login-btn' onClick={changeToLogin}>Login</button></p>
        </div>
        }
    </div>
  )
}

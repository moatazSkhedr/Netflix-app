import React, { useState } from 'react';
import './login.css';
import SignIn from './SignIn';
function Login() {
    const [singIn , setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
        <div className='loginScreenBg'>
            <img className='loginScreenLogo' src='../../../images/logo.png' alt='netflixLogo' />
            <button onClick={()=>setSignIn(true)} className='singBtn'>Sign In</button>
            <div className='loginScreenGradiant' />

        </div>

        <div className='loginScreenBody'>
           
            {singIn ? (<SignIn />) : (
                            <>
                            <h1>
                                Unlimited Films , TV Programmers and more .
                            </h1>
                            <h2>Watch any where , Cancle any time</h2>
                            <h3>Ready to watch ? Enter your email to create or restart your membership</h3>
                            <div className='loginScreenInput'>
                                <form action=''>
                                    <input type='email'placeholder='Enter Your Mail'  />
                                    <button onClick={()=>setSignIn(true)} className='loginScreenGetStart'>GET STARTED</button>
                                </form>
                            </div>
                            </>
                
            )}
        </div>


    </div>
  )
}

export default Login
import React, { useRef } from 'react';
import './signIn.css';
import {auth} from '../../firebase'
function SignIn() {
  const emailRef = useRef(null);
  const passowrdRef = useRef(null);

   // when click create account with email and password 
  const register = (e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passowrdRef.current.value
    ).then((authUser)=>{
      console.log(authUser);
    }).catch(error=>{
      alert(error.message)
    })
  }


  const signIn = (e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passowrdRef.current.value
    ).then((authUser)=>{
      console.log(authUser);
    }).catch(errer =>{
      alert(errer.message)
    })
  }
  return (
    <div className='signIn'>
              <form>
        <h2>Sign In </h2>
        <input ref={emailRef} type='email' placeholder='Email' />
        <input ref ={passowrdRef}type='Password' placeholder='password' />
        <button onClick={signIn} type='submit'>Sign In</button>

        <h4>
          <span className='signInGray'>New to Netflix? </span>
           <span onClick={register} className="signInLink">Sign Up now.</span>
           </h4>
        </form>
    </div>
  )
}

export default SignIn
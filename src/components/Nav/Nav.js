import React, { useEffect, useState } from 'react'
import './nav.css'
import { Link, useHistory } from 'react-router-dom';
function Nav() {

  const [show , handleShow] = useState(false);
  const transitionNavbar = ()=>{
    if(window.scrollY > 100){
      handleShow(true);
    }
    else{
      handleShow(false);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll" , transitionNavbar)
    return ()=>window.removeEventListener("scroll" , transitionNavbar);
  })
  return (
    <div className={`nav ${show && `navBlack`}`}>
      <div className='navContent'>
        <Link to="/">
        <img src='../../../images/logo.png' className='logo' />

        </Link>
        <Link to="/profile" className='avatar'>
        <img
        src='../../../images/Netflix-avatar.png' className=''/>
        </Link>
      </div>
    </div>
  )
}

export default Nav
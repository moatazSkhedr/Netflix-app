import React from 'react'
import './profileScreen.css';
import Nav from '../Nav/Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import {auth} from '../../firebase'
function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <div className='nav-fixed'>
      <Nav />
      </div>

        <div className='profileScreenBody'>
            <h1>Edit Profile</h1>
            <div className='profileScreenInfo'>
              <img src='../../../images/Netflix-avatar.png' />
              <div className='profileScreenDetails'>
                <h2>{user.email}</h2>
                <div className='profileScreenPlans'>
                  <h3>Plans</h3>
                  <button onClick={()=>auth.signOut()} className='profileScreenSignOut'>Sign Out</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen
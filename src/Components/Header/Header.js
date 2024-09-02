import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import { setAuthDetails } from '../../slices/authSlice'
const Header = () => {
  const dispatch = useDispatch();
  const isActive = ({ isActive }) => {
    return isActive ? 'active sub-text' : 'link sub-text'
  }
  return (
    <div className='header'>
      <span className='title'>Courses</span>
      <div className='nav-link-wrapper'>
        <NavLink to="/" className={isActive}>Home</NavLink>
        <NavLink to="/enquiry" end className={isActive}>User Enquiries</NavLink>
        <GoogleLogin onSuccess={(credRes) => {
          console.log(credRes);
          if (credRes.credential) {
            dispatch(setAuthDetails({
              isLoggedIn: true,
              tokenDetails: credRes
            }))
          }
        }}></GoogleLogin>
      </div>
    </div>
  )
}

export default Header
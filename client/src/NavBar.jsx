import React from 'react'
import {NavLink} from 'react-router-dom'
import {NavBar} from "./styled"

function Navbar({handleSearchTeam, currentUser}) {


  return (
    <NavBar>
      {/* <input className="main-search" onChange={handleSearchTeam} className="prompt" placeholder="Search Teams"/>
            <i className="search-icon" /> */}
            {/* <h1>{currentUser.name}</h1> */}
            <h1>Hi</h1>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/teams'>
                Teams  
            </NavLink>
            <NavLink to='/players'>
                Players  
            </NavLink>
            <NavLink to='/games'>
                Games  
            </NavLink>
            <NavLink to='/signup'>
                Sign Up  
            </NavLink>
            <NavLink to='/log_in'>
                Log in  
            </NavLink>
    </NavBar>
  )

  }
export default Navbar;

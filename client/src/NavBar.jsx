import React from 'react'
import {NavLink} from 'react-router-dom'
import "./NavBar.css"

function NavBar({handleSearchTeam}) {


  return (
    <div>
      <input className="main-search" onChange={handleSearchTeam} className="prompt" placeholder="Search Teams"/>
            <i className="search-icon" />
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/teams'>
                Teams  
            </NavLink>
    </div>
  )

  }
export default NavBar;

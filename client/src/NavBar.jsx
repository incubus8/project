import React from 'react'
import "./NavBar.css"

function NavBar({handleSearchTeam}) {


  return (
    <div>
      <input className="main-search" onChange={handleSearchTeam} className="prompt" placeholder="Search Teams"/>
            <i className="search-icon" />
    </div>
  )

  }
export default NavBar;

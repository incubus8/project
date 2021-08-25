import React from 'react'
import {useHistory, NavLink} from 'react-router-dom'
import './NavBar.css'

function Navbar({currentUser, setCurrentUser}) {

  const history = useHistory()

  function logOut(){
    localStorage.removeItem("token")
    localStorage.removeItem("player")
    setCurrentUser(null)
    history.push('/')
  }

console.log(currentUser);
  return (
    <div className="navbar" style={{ padding: "20px"}}>
        {/* <span style={{color: "white", fontSize: "25px"}}>FLUF</span> */}
         {currentUser ? 
            <span className="welcome">{currentUser.name}</span>
            : null}        
              {currentUser ? (
                <>
                  {/* <NavLink className='links' to='/'>
                      <a className="linkTags">Home</a>
                    </NavLink> */}

                    <NavLink  className='links' to='/teams'>
                      <a className="linkTags">Teams</a>  
                    </NavLink>
                    
                    <NavLink className='links' to='/players'>
                      <a className="linkTags">Players</a>  
                    </NavLink>

                    <NavLink className='links' to='/games'>
                      <a className="linkTags">Games</a>  
                    </NavLink>

                    <NavLink className='links' to='/'>
                      <button className="button" onClick={logOut}>Sign Out</button>
                    </NavLink>
                </>
              ):(
                <>
                    {/* <NavLink className='links' to='/'>
                      <a className="linkTags">Home</a>
                    </NavLink> */}

                    <NavLink className='links' to='/teams'>
                      <a className="linkTags">Teams</a>  
                    </NavLink>

                    <NavLink className='links' to='/players'>
                    <a className="linkTags">Players</a>   
                    </NavLink>

                    <NavLink className='links' to='/games'>
                      <a className="linkTags">Games</a>  
                    </NavLink>

                    <NavLink className='links' to='/signup'>
                      <a className="linkTags">Sign Up</a>                    
                    </NavLink>

                    <NavLink className='links' to='/signin'>
                      <a className="linkTags">Sign In</a>
                    </NavLink>
                </>
            )}

    </div>
  )

  }
export default Navbar;

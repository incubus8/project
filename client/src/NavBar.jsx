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
    <div className="navbar">
         {currentUser ? 
            <h1>{currentUser.name}</h1>
            : null}

            {/* <h1>Hi</h1> */}
          
              {currentUser ? (
                <>
                  {/* <NavLink to='/'>
                        Home
                    </NavLink> */}

                    <NavLink className='links' to='/teams'>
                        Teams  
                    </NavLink>
                    
                    <NavLink className='links' to='/players'>
                        Players  
                    </NavLink>

                    <NavLink className='links' to='/games'>
                        Games  
                    </NavLink>

                    <NavLink className='links' to='/'>
                        <button onClick={logOut}>Sign Out</button>
                    </NavLink>
                </>
              ):(
                <>
                    {/* <NavLink to='/'>
                        Home
                    </NavLink> */}

                    <NavLink className='links' to='/teams'>
                        Teams  
                    </NavLink>

                    <NavLink className='links' to='/players'>
                        Players  
                    </NavLink>

                    <NavLink className='links' to='/games'>
                        Games  
                    </NavLink>

                    <NavLink className='links' to='/signup'>
                        Sign Up  
                    </NavLink>

                    <NavLink className='links' to='/signin'>
                        Sign in  
                    </NavLink>
                </>
            )}

    </div>
  )

  }
export default Navbar;

import React from 'react'
import {useHistory, NavLink} from 'react-router-dom'
// import {NavBar} from "./styled"

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
    <div>
         {currentUser ? 
            <h1>{currentUser.name}</h1>
            : null}

            {/* <h1>Hi</h1> */}
          
              {currentUser ? (
                <>
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

                    <NavLink to='/'>
                        <button onClick={logOut}>Sign Out</button>
                    </NavLink>
                </>
              ):(
                <>
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

                    <NavLink to='/signin'>
                        Sign in  
                    </NavLink>
                </>
            )}

    </div>
  )

  }
export default Navbar;

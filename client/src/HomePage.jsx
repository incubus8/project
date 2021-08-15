import React, {useState, useEffect} from 'react'
import {Route, Switch, Router, Link} from 'react-router-dom'
import Auth from './Auth'
import NavBar from './NavBar';
import Teams from './Teams';
import Players from './Players';
import Games from './Games';



function HomePage() {
  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])
  const [games, setGames] = useState([])
  const [searchTeam, setSearchTeam] = useState("")
  const [toggleTeams, setToggleTeams] = useState(false)
  const [togglePlayers, setTogglePlayers] = useState(false)
  const [toggleGames, setToggleGames] = useState(false)


    useEffect((e) => {
      fetch('http://localhost:3000/teams')    
      .then(resp => resp.json())
      .then(data => setTeams(data))
    }, [])

    useEffect((e) => {
      fetch('http://localhost:3000/players')    
      .then(resp => resp.json())
      .then(data => setPlayers(data))
    }, [])

    useEffect((e) => {
      fetch('http://localhost:3000/games')    
      .then(resp => resp.json())
      .then(data => setGames(data))
    }, [])

    const addTeam = (newTeam) => {
      let teamArray = [...teams, newTeam]
      setTeams(teamArray)
    }

    const addPlayer = (newPlayer) => {
      let playerArray = [...players, newPlayer]
      setPlayers(playerArray)
    }

    const addGame = (newGame) => {
      let gameArray = [...games, newGame]
      setGames(gameArray)
    }

    const handleSearchTeam = (e) => {
      setSearchTeam(e.target.value)
    }

    const filterTeams = teams.filter(team => {
      return (team.name.toLowerCase().includes(searchTeam.toLowerCase()))
    })

    const filterPlayers = players.filter(player => {
      return (player.name.toLowerCase().includes(searchTeam.toLowerCase()))
    })

    const handleTeams = () => {
      setToggleTeams(toggleTeams => !toggleTeams)
    }

    const handlePlayers = () => {
      setTogglePlayers(togglePlayers => !togglePlayers)
    }

    const handleGames = () => {
      setToggleGames(toggleGames => !toggleGames)
    }

  return (
          <div>
            <NavBar handleSearchTeam={handleSearchTeam}/>
              <button onClick={handleTeams} className="team-button"> Teams </button>
                {toggleTeams ? (
                  <Teams  teams={filterTeams}
                          players={filterPlayers}
                          addTeam={addTeam}/>
                  ) : (
                  null
                )}
              <button onClick={handlePlayers} className="team-button"> Players </button>
                {togglePlayers ? (
                  <Players  players={filterPlayers}
                            addPlayer={addPlayer}/>
                  ) : (
                  null
                )}
              <button onClick={handleGames} className="team-button"> Games </button>
                {toggleGames ? (
                  <Games  games={games}
                          addGame={addGame}/>
                  ) : (
                  null
                )}

                {/* <Auth/>
               <User/>
               <Admin/>
               <Footer/> */}
          </div>


      // <>
      //   <NavBar/>
      //   <main>
      //     <Switch>
      //       <Route path='/teams'>
      //         <Teams/>
      //       </Route>
      //       <Route exact path='/'>
      //         <NavBar/>
      //       </Route>
      //     </Switch>
      //   </main>
      // </>
  )
}

export default HomePage;

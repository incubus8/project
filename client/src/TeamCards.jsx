import React, {useState, useEffect} from 'react'
import './TeamCards.css'
import TeamRoster from './TeamRoster'
import {Button} from 'semantic-ui-react'

function TeamCards({name, image, id}) {

    const [toggle, setToggle] = useState(false)
    const [lineUp, setLineUp] = useState([])
    const [players, setPlayers] = useState([])

    const handleClick = () => {
        setToggle(toggle => !toggle)
    }

    useEffect(() => {
        fetch(`http://localhost:3000/teams/${id}`)
        .then(resp => resp.json())
        .then(data => setLineUp(data))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        let formData = {
          name:name,
        }

    fetch('http://localhost:3000/rosters', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then((res) => res.json())
      .then(playerData => addPlayer(playerData))
    }

      const addPlayer = (newPlayer) => {
        let playerArray = [...players, newPlayer]
        setPlayers(playerArray)
      }

  return (
        <div className="team-card">
            <img src={image} alt="oops"/>
            <div class='team-card-body'>
                <h4>{name}</h4>
                <Button onClick={handleClick} className="team-button">Roster</Button>
                
                {toggle ? (
                    <TeamRoster lineUp={lineUp}/>                
                  ) : (
                  null
                )}
            </div>
            {/* <button onClick={createTeam}>Create Team</button> */}
        </div>
  )

  }
export default TeamCards;

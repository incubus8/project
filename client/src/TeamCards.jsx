import React, {useState, useEffect} from 'react'
import './TeamCards.css'
import TeamRoster from './TeamRoster'

function TeamCards({name, image, id, addTeam, players}) {

    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(toggle => !toggle)
    }


    // useEffect((e) => {
    //     fetch(`http://localhost:3000/rosters/${id}`)
    //     .then(resp => resp.json())
    //     .then(data => console.log("hi", data))
    // }, [])

  return (
        <div className="team-card">
            <img src={image}/>
            <div class='team-card-body'>
                <h4>{name}</h4>
                {/* <Players/> */}
                <button onClick={handleClick} className="team-button">Roster</button>
                
                {toggle ? (
                  <TeamRoster   team_id={id}
                                players={players}/>
                  ) : (
                  null
                )}
            </div>
            {/* <button onClick={createTeam}>Create Team</button> */}
        </div>
  )

  }
export default TeamCards;

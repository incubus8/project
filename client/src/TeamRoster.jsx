import React, {useState, useEffect} from 'react'
import './TeamCards.css'

function TeamRoster({team_id, id, players}) {

    const [lineup, setLineup] = useState([])

    // const createTeam = () => {
    //     addTeam()
    // }
   

    useEffect((e) => {
        fetch(`http://localhost:3000/rosters/${id}`)
        .then(resp => resp.json())
        .then(data => console.log("hi", data))
    }, [])

  return (
        <div className="team-card">
            <div class='team-card-body'>
                {/* <h4>{name}</h4>
                <h4>{email}</h4> */}
                {/* <Players/> */}
                <button>Remove</button>
            </div>
            {/* <button onClick={createTeam}>Create Team</button> */}
        </div>
  )

  }
export default TeamRoster;

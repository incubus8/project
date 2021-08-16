import React, {useState, useEffect} from 'react'
import './TeamCards.css'
import TeamRoster from './TeamRoster'

function TeamCards({name, image, id}) {

    const [toggle, setToggle] = useState(false)
    const [lineUp, setLineUp] = useState([])


    const handleClick = () => {
        setToggle(toggle => !toggle)
    }

    useEffect(() => {
        fetch(`http://localhost:3000/teams/${id}`)
        .then(resp => resp.json())
        .then(data => setLineUp(data))
    }, [])

    

  return (
        <div className="team-card">
            <img src={image}/>
            <div class='team-card-body'>
                <h4>{name}</h4>
                {/* <Players/> */}
                <button onClick={handleClick} className="team-button">Roster</button>
                
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

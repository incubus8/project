import {useState} from 'react'
import {Button} from 'semantic-ui-react'
import Frisbee from './Images/Frisbee.jpeg'
import './TeamCards.css'


function PlayerCards({player_name, player_email, player_id, teams, playersTeams, handleDelete, id}) {

  const [rosters, setRosters] = useState([])
  const [toggle, setToggle] = useState(false)
  const [teamId, setTeamId] = useState(null)
  const [toggleOptions, setToggleOptions] = useState(true)

  const teamArr = playersTeams.map(team => {
      if (team.name === undefined) {
        return null
    } else {
        return <ul>{team.name}</ul>
    }
  })

  const teamList = teams.map(team => <option key={team.id} value={team.id}>{team.name}</option>)

  const handleDeleteClick = () => {
    handleDelete(player_id)
  }

  const handleSetTeamId = (e) => {
    setTeamId(e.target.value)
  }

  // useEffect((e) => {
  //   fetch('http://localhost:3000/teams')    
  //   .then(resp => resp.json())
  //   .then(data => console.log("hey", data))
  // }, [])

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.value);
    let formData = {
      team_id: teamId,
      player_id: player_id
    }

    fetch(`http://localhost:3000/rosters`, {
              method: 'POST',
              headers: { 
                  'Content-Type': 'application/json',
                  },
              body: JSON.stringify(formData),
              })
              .then((res) => res.json())
              .then(rosterData => addRoster(rosterData))
             }

    const addRoster = (newRoster) => {
      let rosterArray = [...rosters, newRoster]
      setRosters(rosterArray)
    }

    const handleToggle = () => {
      setToggle(!toggle)
    }

    const handleToggleOptions = () => {
      setToggleOptions(!toggleOptions)
    }

  return (
    <div className="player-card">
            <div class='player-card-body'>
                <br></br>
                <br></br>
                <h3>{player_name}</h3>
                <h3>{player_email}</h3>

                {/* <Button compact color="black" className="button" onClick={handleToggleOptions} className="teams-button">Options</Button> */}
              <select className="teamSubmit" onChange={handleSetTeamId} value={teamId} >
                    <option>Select Team</option>
                      {teamList}
                  </select>
              <Button compact color="black" id="btn" className="button" onClick={handleSubmit}>Add To Team</Button>

                <Button compact color="black" className="button" onClick={handleToggle} className="teams-button">Show Teams</Button>
                { toggle ? (
                  <h5 className="teams">{teamArr}</h5>
                 ) : (
                  null)
                }
                <Button compact color="black" className="button" onClick={handleDeleteClick}>Remove</Button>
                </div>
        {/* <button onClick={createTeam}>Create Team</button> */}
    </div>
  )

  }
export default PlayerCards;

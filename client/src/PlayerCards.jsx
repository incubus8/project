import {useState} from 'react'
import {Button} from 'semantic-ui-react'


function PlayerCards({player_name, player_email, player_id, teams, handleDelete, teamList, id}) {

  const [rosters, setRosters] = useState([])
  const [teamss, setTeamss] = useState([])
  const [teamName, setTeamName] = useState("")
  const [toggle, setToggle] = useState(false)

  const teamArr = teams.map(team => {
      if (team.name === undefined) {
        return null
    } else {
        return <ul>{team.name}</ul>
    }
  })
  const handleTeamName = (e) => setTeamss(e.target.value)

  const handleDeleteClick = () => {
    handleDelete(player_id)
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
      team_id: teams,
      player_id: player_id
    }

    fetch(`http://localhost:3000/rosters/${id}`, {
              method: 'PATCH',
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

  return (
    <div className="player-card">
            <div class='player-card-body'>
              {/* <form onSubmit={handleSubmit}>
                <button>Add To Team</button>
                  <select value={teams} onChange={handleTeamName}>
                    <option>Select Team</option>
                      {teamList}
                  </select>
              </form> */}
              <select className="teamSubmit" value={teams.id} >
                    <option >Select Team</option>
                      {teamList}
                  </select>
              <Button className="button">Add To Team</Button>
                <h4>{player_name}</h4>
                <h4>{player_email}</h4>

                <Button className="button" onClick={handleToggle} className="teams-button">Show Teams</Button>
                { toggle ? 
                  <h5>{teamArr}</h5>
                  :
                  null
                }
                {/* <Players/> */}
                <Button className="button" onClick={handleDeleteClick}>Remove</Button>
            </div>
        {/* <button onClick={createTeam}>Create Team</button> */}
    </div>
  )

  }
export default PlayerCards;

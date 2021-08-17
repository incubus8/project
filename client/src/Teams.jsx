import {useEffect, useState} from 'react'
import TeamCards from './TeamCards'

function Teams() {

  const [teams, setTeams] = useState([])


  useEffect((e) => {
      fetch('http://localhost:3000/teams')    
      .then(resp => resp.json())
      .then(data => setTeams(data))
    }, [])


    const teamArr = teams.map((team) => {
        return <TeamCards
        key={team.id}
        {...team}
        />
    })

  return (
    <div>
      {teamArr}
    </div>
  )

  }
export default Teams;

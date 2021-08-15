import react from 'react'
import TeamCards from './TeamCards'

function Teams({teams, addTeam, players}) {


    const teamArr = teams.map((team) => {
        return <TeamCards
        key={team.id}
        {...team}
        players={players}
        addTeam={addTeam}
        />
    })

  return (
    <div>
      {teamArr}
    </div>
  )

  }
export default Teams;

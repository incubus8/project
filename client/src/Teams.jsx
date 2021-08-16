import react from 'react'
import TeamCards from './TeamCards'

function Teams({teams}) {


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

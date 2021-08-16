import React, {useState, useEffect} from 'react'
import './TeamCards.css'
import TeamRosterCards from './TeamRosterCards'

function TeamRoster({lineUp}) {
    
    const lineUpArr = lineUp.players.map((roster) => {
        return <TeamRosterCards
        key={roster.id}
        {...roster}
        />
    })


  return (
    <div>
        {lineUpArr}
    </div>
  )

  }
export default TeamRoster;

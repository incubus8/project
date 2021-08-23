import React from 'react'
import './TeamCards.css'

function TeamRosterCards(props) {

    const {name} = props



  return (
        <div className="roster-lineup">
                <ul>{name}</ul>
        </div>
  )

  }
export default TeamRosterCards;

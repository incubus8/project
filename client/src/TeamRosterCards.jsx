import React from 'react'
import './TeamCards.css'

function TeamRosterCards(props) {

    const {name} = props



  return (
        <div className="roster-lineup">
                <ul>
                  <li>{name}</li>
                </ul>
        </div>
  )

  }
export default TeamRosterCards;

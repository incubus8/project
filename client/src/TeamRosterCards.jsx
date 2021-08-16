import React, {useState, useEffect} from 'react'
import './TeamCards.css'

function TeamRosterCards(props) {

    const {name, email} = props



  return (
        <div className="team-card">
            <div class='team-card-body'>
                <h4>{name}</h4>
                <h4>{email}</h4>
            </div>
        </div>
  )

  }
export default TeamRosterCards;

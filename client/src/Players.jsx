import React from 'react'
import PlayerCards from './PlayerCards'

function Players({players, addPlayer}) {

  const playerArr = players.map((player) => {
    return <PlayerCards
    key={player.id}
    {...player}
    addPlayer={addPlayer}
    />
})


  return (
    <div>
        {playerArr}
    </div>
  )

  }
export default Players;

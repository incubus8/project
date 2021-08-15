import React from 'react'
import GameCards from './GameCards'

function Games({games, addGame}) {

  const gameArr = games.map((game) => {
    return <GameCards
    key={game.id}
    {...game}
    addGame={addGame}
    />
})

  return (
    <div>
      {gameArr}
    </div>
  )

  }
export default Games;

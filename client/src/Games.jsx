import {useEffect, useState} from 'react'
import GameCards from './GameCards'

function Games() {

  const [games, setGames] = useState([])

  useEffect((e) => {
      fetch('http://localhost:3000/games')    
      .then(resp => resp.json())
      .then(data => setGames(data))
    }, [])

  const gameArr = games.map((game) => {
    return <GameCards
    key={game.id}
    {...game}
    />
})

  return (
    <div>
      {gameArr}
    </div>
  )

  }
export default Games;

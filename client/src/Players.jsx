import {useState, useEffect} from 'react'
import PlayerCards from './PlayerCards'

function Players() {

  const [players, setPlayers] = useState([])


  useEffect((e) => {
      fetch('http://localhost:3000/players')    
      .then(resp => resp.json())
      .then(data => setPlayers(data))
    }, [])

  const playerArr = players.map((player) => {
    return <PlayerCards
    key={player.id}
    {...player}
    />
})


  return (
    <div>
        {playerArr}
    </div>
  )

  }
export default Players;

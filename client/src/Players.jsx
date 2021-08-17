import {useState, useEffect} from 'react'
import PlayerCards from './PlayerCards'

function Players() {

  const [players, setPlayers] = useState([])


  useEffect((e) => {
      fetch('http://localhost:3000/players')    
      .then(resp => resp.json())
      .then(data => setPlayers(data))
    }, [])

    const handleDelete = (id) => {
      fetch(`http://localhost:3000/players/${id}`, {
        method: "DELETE",
      })
    }

  const playerArr = players.map((player) => {
    return <PlayerCards
    key={player.id}
    {...player}
    handleDelete={handleDelete}
    />
})


  return (
    <div>
        {playerArr}
    </div>
  )

  }
export default Players;

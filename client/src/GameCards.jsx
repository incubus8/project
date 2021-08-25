import React from 'react'

function GameCards({home_id, away_id, date, result, home_score, away_score, id, handleDelete, home, away}) {

  // const handleDelete = (id) => {
  //   fetch(`http://localhost:3000/games/${id}`, {
  //     method: "DELETE",
  //   })
  // }
  const homeName = home.name
  const awayName = away.name
  
  const winner = result

  const handleDeleteClick = () => {
    handleDelete(id)
  }

  return (
    <div className="game-card">
            <div class='game-card-body'>
                <h3>{homeName}
                  <br/>
                vs {awayName}</h3>
                <h5>Score: {home_score} - {away_score}</h5>
                <h5>{winner} wins!</h5>
                <h5>{date}</h5>
                <button onClick={handleDeleteClick}>Remove</button>
            </div>
    </div>
  )

  }
export default GameCards;

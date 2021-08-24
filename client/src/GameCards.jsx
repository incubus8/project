import React from 'react'

function GameCards({home_id, away_id, date, result, home_score, away_score, id, handleDelete, home, away}) {

  // const handleDelete = (id) => {
  //   fetch(`http://localhost:3000/games/${id}`, {
  //     method: "DELETE",
  //   })
  // }
  const homeName = home.name
  const awayName = away.name
  
  const winner = result.name

  const handleDeleteClick = () => {
    handleDelete(id)
  }

  return (
    <div className="game-card">
            <div class='game-card-body'>
                <h4>{homeName} vs {awayName}</h4>
                <h4>{home_score} - {away_score}</h4>
                <h5>{result}</h5>
                <h5>{date}</h5>
                <button onClick={handleDeleteClick}>Remove</button>
            </div>
    </div>
  )

  }
export default GameCards;

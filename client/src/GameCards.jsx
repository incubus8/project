import React from 'react'

function GameCards({home_id, away_id, date, result, home_score, away_score, id}) {

  // const {home_id, away_id, date, result, home_score, away_score} = props

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/games/${id}`, {
      method: "DELETE",
    })
  }

  const handleDeleteClick = () => {
    handleDelete(id)
  }

  return (
    <div className="team-card">
            <div class='team-card-body'>
                <h4>{home_id} vs {away_id}</h4>
                <h4>{home_score} vs {away_score}</h4>
                <h5>{result}</h5>
                <h5>{date}</h5>
                <button onClick={handleDeleteClick}>Remove</button>
            </div>
        {/* <button onClick={createTeam}>Create Team</button> */}
    </div>
  )

  }
export default GameCards;

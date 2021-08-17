import react from 'react'

function PlayerCards({name, email, id, handleDelete}) {

  const handleDeleteClick = () => {
    handleDelete(id)
  }

  return (
    <div className="team-card">
            <div class='team-card-body'>
                <h4>{name}</h4>
                <h4>{email}</h4>
                {/* <Players/> */}
                <button onClick={handleDeleteClick}>Remove</button>
            </div>
        {/* <button onClick={createTeam}>Create Team</button> */}
    </div>
  )

  }
export default PlayerCards;

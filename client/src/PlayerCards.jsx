
function PlayerCards({name, email, id, handleDelete}) {

  const handleDeleteClick = () => {
    handleDelete(id)
  }

  // fetch('http://localhost:3000/rosters', {
  //           method: 'POST',
  //           headers: { 
  //               'Content-Type': 'application/json',
  //               },
  //           body: JSON.stringify(formData),
  //           })
  //           .then((res) => res.json())
  //           .then(postData => addPost(postData))



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

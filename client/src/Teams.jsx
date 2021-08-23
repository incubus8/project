import {useEffect, useState} from 'react'
import TeamCards from './TeamCards'

function Teams() {

  const [teams, setTeams] = useState([])
  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  const handleName = (e) => setName(e.target.value)
  const handleImage = (e) => setImage(e.target.value)

  useEffect((e) => {
      fetch('http://localhost:3000/teams')    
      .then(resp => resp.json())
      .then(data => setTeams(data))
    }, [])

    const addTeam = (newTeam) => {
      let teamArray = [...teams, newTeam]
      setTeams(teamArray)
    }

    function handleSubmit(e) {
      e.preventDefault()
      let formData = {
        name:name,
        image:image
      }

      fetch('http://localhost:3000/teams', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(formData),
        })
        .then((res) => res.json())
        .then(teamData => addTeam(teamData))

        // const clearForm =[setName(""), setImage("")]
     }


    const teamArr = teams.map((team) => {
        return <TeamCards
        key={team.id}
        {...team}
        handleSubmit={handleSubmit}
        />
    })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button>Add a Team</button>
        <input placeholder="Team Name" value={name} onChange={handleName}/>
        <input placeholder="Image URL" value={image} onChange={handleImage}/>
      </form>
      {teamArr}
    </div>
  )

  }
export default Teams;

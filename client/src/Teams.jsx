import {useEffect, useState} from 'react'
import TeamCards from './TeamCards'
import {Button} from 'semantic-ui-react'
import './TeamCards.css'

function Teams({teams, setTeams}) {

  // const [teams, setTeams] = useState([])
  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  const handleName = (e) => setName(e.target.value)
  const handleImage = (e) => setImage(e.target.value)

  // useEffect((e) => {
  //   fetch('http://localhost:3000/teams')    
  //   .then(resp => resp.json())
  //   .then(data => setTeams(data))
  // }, [])

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
    
    const addTeam = (newTeam) => {
      let teamArray = [...teams, newTeam]
      setTeams(teamArray)
    }

    const teamArr = teams.map((team) => {
        return <TeamCards
        key={team.id}
        {...team}
        />
    })

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input className='teamSubmit' placeholder="Team Name" value={name} onChange={handleName}/>
        <input className='teamSubmit' placeholder="Image URL" value={image} onChange={handleImage}/>
        <Button compact color="black" className="button">Add a Team</Button>
      </form>
      {teamArr}
    </div>
  )

  }
export default Teams;

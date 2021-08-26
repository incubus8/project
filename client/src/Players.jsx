import {useState, useEffect} from 'react'
import PlayerCards from './PlayerCards'
import './TeamCards.css'
import {Button} from 'semantic-ui-react'

function Players({teams, setTeams}) {

  const [players, setPlayers] = useState([])
  // const [teams, setTeams] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [search, setSearch] = useState("")
  const [password, setPassword] = useState("")
  const [teamName, setTeamName] = useState("")

  const handleTeamName = (e) => setTeamName(e.target.value)
  const handleName = (e) => setName(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  const handleSearch = (e) => setSearch(e.target.value)

  // const teamList = teams.map(team => <option key={team.id} value={team.id}>{team.name}</option>)

  const removePlayer = (playerId) => {
    const lessPlayers = players.filter(p => p.id !== playerId)

    setPlayers(lessPlayers)
  }

  useEffect((e) => {
      fetch('http://localhost:3000/players')    
      .then(resp => resp.json())
      .then(data => setPlayers(data))
    }, [])

    const handleDelete = (id) => {
      fetch(`http://localhost:3000/players/${id}`, {
        method: "DELETE",
      })
      .then(data => removePlayer(id),)
    }

    function handleSubmit(e) {
      e.preventDefault()
      let formData = {
        name,
        email,
      }

      // NOTE: MOVED TO APP
      const addPlayer = (newPlayer) => {
        let playerArray = [newPlayer, ...players]
        setTeams(playerArray)
      }

    fetch('http://localhost:3000/players', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(formData),
        })
        .then((res) => res.json())
        .then(playerData => addPlayer(playerData))
     }


    const filterPlayers = players.filter(player => {
      return (player.name.toLowerCase().includes(search.toLowerCase()))
    })


  const playerArr = filterPlayers.map((player) => {
    return <PlayerCards
    key={player.id}
    player_name={player.name}
    player_email={player.email}
    player_id={player.id}
    playersTeams={player.teams}
    teams={teams}
    // teamList={teamList}
    handleDelete={handleDelete}
    />
  })


  return (
    <div>
      <form className="submitPlayer" onSubmit={handleSubmit}>
        <input className="teamSubmit" id="search" onChange={handleSearch} type="text" placeholder="Search Players"></input>
        {/* <input className='teamSubmit' placeholder="Player Name" value={name} onChange={handleName}/>
        <input className='teamSubmit' placeholder="Email Address" value={email} onChange={handleEmail}/> */}
        {/* <Button>Add a Player</Button> */}
      </form>
        {playerArr}
    </div>
  )
  }
export default Players;

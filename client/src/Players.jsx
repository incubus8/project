import {useState, useEffect} from 'react'
import PlayerCards from './PlayerCards'

function Players() {

  const [players, setPlayers] = useState([])
  const [teams, setTeams] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [teamName, setTeamName] = useState("")

  const handleTeamName = (e) => setTeamName(e.target.value)
  const handleName = (e) => setName(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)

  const teamList = teams.map(team => <option key={team.id} value={team.id}>{team.name}</option>)


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

    useEffect((e) => {
      fetch('http://localhost:3000/teams')    
      .then(resp => resp.json())
      .then(data => setTeams(data))
    }, [])

    function handleSubmit(e) {
      e.preventDefault()
      let formData = {
        name:name,
        email:email
      }

      const addPlayer = (newPlayer) => {
        let playerArray = [...players, newPlayer]
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


  const playerArr = players.map((player) => {
    console.log("player", player);
    return <PlayerCards
    key={player.id}
    player_name={player.name}
    player_email={player.email}
    player_id={player.id}
    teams={player.teams}
    teamList={teamList}
    handleDelete={handleDelete}
    />
})


  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <button>Add a Player</button>
        <input placeholder="Player Name" value={name} onChange={handleName}/>
        <input placeholder="Email Address" value={email} onChange={handleEmail}/>
      </form> */}
        {playerArr}
    </div>
  )

  }
export default Players;

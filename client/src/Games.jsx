import {useEffect, useState} from 'react'
import GameCards from './GameCards'

function Games() {

  const [games, setGames] = useState([])
  const [home, setHome] = useState("")
  const [away, setAway] = useState("")
  const [homeScore, setHomeScore] = useState("")
  const [awayScore, setAwayScore] = useState("")
  const [date, setDate] = useState("")
  const [result, setResult] = useState("")
  const [teams, setTeams] = useState([])

  const handleHome = (e) => setHome(e.target.value)
  const handleAway = (e) => setAway(e.target.value)
  const handleHomeScore = (e) => setHomeScore(e.target.value)
  const handleAwayScore = (e) => setAwayScore(e.target.value)
  const handleDate = (e) => setDate(e.target.value)
  const handleResult = (e) => setResult(e.target.value)

  const teamList = teams.map(team => <option key={team.id} value={team.id}>{team.name}</option>)
  const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  const scoresList = scores.map(score => <option key={score.id} value={score.id}>{score}</option>)
  const results = ["home wins", "away wins"]
  const resultsList = results.map(result => <option key={result.id} value={result.id}>{result}</option>)
  
  
  useEffect((e) => {
      fetch('http://localhost:3000/games')    
      .then(resp => resp.json())
      .then(data => setGames(data))
    }, [])

  useEffect((e) => {
    fetch('http://localhost:3000/teams')    
    .then(resp => resp.json())
    .then(data => setTeams(data))
  }, [])


  // const handleDelete = (id) => {
  //   fetch(`http://localhost:3000/games/${id}`, {
  //     method: "DELETE",
  //   })
  // }

  function handleSubmit(e) {
    e.preventDefault()
    let formData = {
      home_id: home,
      away_id: away,
      home_score: homeScore,
      away_score: awayScore,
      result: result,
      date: date
    }

  fetch('http://localhost:3000/games', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(formData),
        })
        .then((res) => res.json())
        .then(gameData => addGame(gameData))
     }

     const addGame = (newGame) => {
      let gameArray = [...games, newGame]
      setGames(gameArray)
    }

  const gameArr = games.map((game) => {
    return <GameCards
    key={game.id}
    {...game}
    />
})

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button>Add a Game</button>
          <select value={home} onChange={handleHome}>
            <option>Select Team</option>
              {teamList}
          </select>
          <select value={away} onChange={handleAway}>
            <option>Select Team</option>
              {teamList}
          </select>
          <select value={homeScore} onChange={handleHomeScore}>
            <option>Select Home Score</option>
              {scoresList}
          </select>
          <select value={awayScore} onChange={handleAwayScore}>
            <option>Select Away Score</option>
              {scoresList}
          </select>
          <select value={result} onChange={handleResult}>
            <option>Winner</option>
              {resultsList}
          </select>
        {/* <input placeholder="Home Team" value={home} onChange={handleHome}/>
        <input placeholder="Away Team" value={away} onChange={handleAway}/>
        <input placeholder="Home Score" value={homeScore} onChange={handleHomeScore}/>
        <input placeholder="Away Score" value={awayScore} onChange={handleAwayScore}/>
        <input placeholder="Result" value={result} onChange={handleResult}/> */}
        <input placeholder="Date" value={date} onChange={handleDate}/>
      </form>
      {gameArr}
    </div>
  )

  }
export default Games;

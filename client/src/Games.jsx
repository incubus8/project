import {useEffect, useState} from 'react'
import GameCards from './GameCards'
import {Button} from 'semantic-ui-react'

function Games({teams}) {

  const [games, setGames] = useState([])
  const [home, setHome] = useState("")
  const [away, setAway] = useState("")
  const [homeScore, setHomeScore] = useState("")
  const [awayScore, setAwayScore] = useState("")
  const [date, setDate] = useState("")
  const [result, setResult] = useState("")
  // const [teams, setTeams] = useState([])

  const teamList = teams.map(team => <option key={team.id} value={team.id}>{team.name}</option>)
  const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  const scoresList = scores.map(score => <option key={score.id} value={score.id}>{score}</option>)
  const winnerList = teams.map(team => <option key={team.id} value={team.name}>{team.name}</option>)
  // const winnerList = [{home}, {away}]
  // const resultsList = results.map(result => <option key={result.id} value={result.id}>{result}</option>)
  
  const handleHome = (e) => setHome(e.target.value)
  const handleAway = (e) => setAway(e.target.value)
  const handleHomeScore = (e) => setHomeScore(e.target.value)
  const handleAwayScore = (e) => setAwayScore(e.target.value)
  const handleDate = (e) => setDate(e.target.value)
  const handleResult = (e) => setResult(e.target.value)

  const pickWinner = () => {
    if (homeScore > awayScore) {
      return home.name 
    }
    return away.name
  }
  
  useEffect((e) => {
      fetch('http://localhost:3000/games')
      .then(resp => resp.json())
      .then(data => setGames(data))
    }, [])

    
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/games/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      const updatedGames = games.filter((game) => {
        return game.id !== id
      })
      setGames(updatedGames)
    })
  }

  // useEffect((e) => {
  //   fetch('http://localhost:3000/teams')    
  //   .then(resp => resp.json())
  //   .then(data => setTeams(data))
  // }, [])

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
      let gameArray = [newGame, ...games]
      setGames(gameArray)
    }

  const gameArr = games.map((game) => {
    return <GameCards
    key={game.id}
    {...game}
    home={game.home}
    away={game.away}
    handleDelete={handleDelete}
    />
})

  return (
    <div>
      <form className="submitGame" onSubmit={handleSubmit}>
          <select className='teamSubmit' value={home} onChange={handleHome}>
            <option>Select Team</option>
              {teamList}
          </select>
          <select className='teamSubmit' value={away} onChange={handleAway}>
            <option>Select Team</option>
              {teamList}
          </select>
          <select className='teamSubmit' value={homeScore} onChange={handleHomeScore}>
            <option>Select Home Score</option>
              {scoresList}
          </select>
          <select className='teamSubmit' value={awayScore} onChange={handleAwayScore}>
            <option>Select Away Score</option>
              {scoresList}
          </select>
          <select className='teamSubmit' value={result} onChange={handleResult}>
            <option>Winner</option>
              {winnerList}
          </select>
        <input className='teamSubmit' type="date" value={date} onChange={handleDate}/>
        <Button className="button">Add a Game</Button>
      </form>
      {gameArr}
    </div>
  )

  }
export default Games;

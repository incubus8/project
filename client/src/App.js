import {useState, useEffect} from 'react'
import './App.css';
import HomePage from './HomePage'
import NavBar from './NavBar'
import {Route, Switch} from 'react-router-dom'
import Teams from './Teams'
import Players from './Players'
import Games from './Games'


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/current_user')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Switch>
          <Route exact path='/' render={() => <HomePage/>} />
          <Route path='/teams' render={() => <Teams />} />      
          <Route path='/players' render={() => <Players />} />      
          <Route path='/games' render={() => <Games />} />      
      </Switch>
    </div>
  );
}

export default App;

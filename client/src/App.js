import {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './HomePage'
import Navbar from './Navbar'
import Teams from './Teams'
import Players from './Players'
import Games from './Games'
import Auth from './Auth'
import Login from './Login'
import 'semantic-ui-css/semantic.min.css'
import './App.css';


function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:3000/me', {
      headers: { 
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => res.json())
    .then(data => setCurrentUser(data))
  }, [])


console.log('user', currentUser);
  return (
    <div className="App">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Switch>
          {/* <Route exact path='/' render={() => <HomePage/>} /> */}
          <Route path='/signup' render={() => <Auth setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />      
          <Route path='/teams' render={() => <Teams />} />      
          <Route path='/players' render={() => <Players />} />      
          <Route path='/games' render={() => <Games />} />      
          <Route path='/' render={() => <Login setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />      
      </Switch>
    </div>
  );
}

export default App;

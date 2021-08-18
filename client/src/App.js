import {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './HomePage'
import Navbar from './Navbar'
import Teams from './Teams'
import Players from './Players'
import Games from './Games'
import Auth from './Auth'
import Login from './Login'
import './App.css';

// require('react-dom');
// window.React2 = require('react');
// console.log("test", window.React1 === window.React2);


function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/')
    .then(res => res.json())
    .then(data => setCurrentUser(data))
  }, [])



  return (
    <div className="App">
      <Navbar currentUser={currentUser}/>
      <Switch>
          <Route exact path='/' render={() => <HomePage/>} />
          <Route exact path='/signup' render={() => <Auth setCurrentUser={setCurrentUser}/>} />      
          <Route path='/teams' render={() => <Teams />} />      
          <Route path='/players' render={() => <Players />} />      
          <Route path='/games' render={() => <Games />} />      
          <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser}/>} />      
      </Switch>
    </div>
  );
}

export default App;

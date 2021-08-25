import {useHistory} from 'react-router-dom'
import React, {useState} from 'react'
import {Input, Form} from './styled'


function Auth({setCurrentUser}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(null)

    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        const player = {
            name,
            password,
            email
        }
        const token =localStorage.getItem('token')
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({player})
        })
        .then((res) => res.json())
        .then((data) => {
        if(data.errors) {
            setErrors(data.errors)
        } else {
            const {player, token} = data
            localStorage.setItem("token", token)
            setCurrentUser(player)
            history.push('/') 
        }
    })
    }

    return (
        <>
           <Form onSubmit={handleSubmit}>
                <h1>Welcome to FLUF</h1>
                <h3>FLatiron Ultimate Frisbee</h3>
                <h3>Sign Up Below</h3>
                <Input
                        type="text"
                        placeholder="name"
                        value={name}
                        name="name"
                        onChange={(e) => setName(e.target.value)}>
                </Input>
                <Input
                        type="text"
                        placeholder="email"
                        value={email}
                        email="email"
                        onChange={(e) => setEmail(e.target.value)}>
                </Input>
                <Input
                        type="text"
                        placeholder="Password"
                        value={password}
                        password="password"
                        onChange={(e) => setPassword(e.target.value)}>
                </Input>
                <Input submit type="submit" value="Sign Up" ></Input>
                {errors?errors.map(error => <div>(error)</div>):null}
           </Form>
        </>
    )
}

export default Auth
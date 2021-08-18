import {useHistory} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import {Input, Form} from './styled'


function Auth({setCurrentUser}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(null)

    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        const player = {
            name,
            password,
            email
        }
        const res = await fetch('http://localhost:3000/players', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({player})
        })
        const playerData = await res.json()
        if(res.ok){
            setCurrentUser(playerData)
            history.push('/')
        } else {
            setErrors(playerData.message)
        }
    }

    return (
        <>
           <Form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
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
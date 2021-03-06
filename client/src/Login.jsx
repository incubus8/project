import {useHistory} from 'react-router-dom'
import React, {useState} from 'react'
import {Input, Form} from './styled'


function Login({setCurrentUser}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        const player = {
            name,
            password,
            email
        }
        
        const token =localStorage.getItem('token')
        fetch('http://localhost:3000/signin', {
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

        // (playerData.id){
        //     const {playerInfo, token} = playerData
        //     localStorage.setItem("token", token)
        //     setCurrentUser(playerInfo)
        //     history.push('/')
        // } else {
        //     setErrors(playerData.message)
        // }

    return (
        <>
           <Form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <Input
                        type="text"
                        required
                        placeholder="name"
                        value={name}
                        name="name"
                        onChange={(e) => setName(e.target.value)}>
                </Input>
                <Input
                        type="text"
                        required
                        placeholder="email"
                        value={email}
                        email="email"
                        onChange={(e) => setEmail(e.target.value)}>
                </Input>
                <Input
                        type="password"
                        required
                        placeholder="Password"
                        value={password}
                        password="password"
                        onChange={(e) => setPassword(e.target.value)}>
                </Input>
                {errors ? errors.map(error => <div>{error}</div>) : null}
                <Input submit type="submit" value="Log in" ></Input>
           </Form>
        </>
    )
}

export default Login
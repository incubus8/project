import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {Form, Input} from "./styled"

function Auth(){
    return (
        <>
            <h1>Sign up</h1>
            <Form>
                <Input>Name</Input>
                <Input>Email</Input>
                <Input>Password</Input>
            </Form>
        </>
    )

}

export default Auth
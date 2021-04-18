import React, {useState} from 'react';
import { Button, TextField, ContentIntro } from '../../components';

import { Container, ContentForm } from "../../styles/helpers";

const Register = () => {
  
    const [state, setState] = useState({});

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        console.log(event);
    }

    return (
        <Container>
            <ContentIntro></ContentIntro>
            <ContentForm>
                <h2> Register </h2>
                <form onSubmit={handleSubmit}>

                    <TextField 
                        type="text" 
                        name="name" 
                        value={state.name} 
                        label="Full Name"
                        onChange={handleChange}/>

                    <TextField 
                        type="email" 
                        name="email" 
                        value={state.email} 
                        label="E-mail"
                        onChange={handleChange}/>

                    <TextField 
                        type="text" 
                        name="login" 
                        value={state.login} 
                        label="Login"
                        onChange={handleChange}/>

                    <TextField 
                        type="password" 
                        name="password" 
                        value={state.password} 
                        label="Password"
                        onChange={handleChange}/>

                    <Button value="Register"></Button>
                </form>
            </ContentForm>
        </Container>
    )
}

export default Register;
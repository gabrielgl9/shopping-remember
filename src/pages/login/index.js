import React, {useState} from 'react';
import { Button, TextField, ContentIntro } from '../../components';

import { Container } from "../../styles/container";
import { ContentForm } from "../../styles/content-form";

const Login = () => {
  
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
                <h2> Login </h2>
                <form onSubmit={handleSubmit}>
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

                    <Button value="Login"></Button>
                </form>
            </ContentForm>
        </Container>
    )
}

export default Login;
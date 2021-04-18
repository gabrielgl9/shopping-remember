import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Button, ContentIntro, TextField } from '../../components';
import { Container } from "../../styles/container";
import { ContentForm } from "../../styles/content-form";


const RedirectionStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    a {
        text-decoration: none;
        color: var(--blue);
    }
`;

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
                    
                    <RedirectionStyle>
                        <Link to="/forget-password"> Forgot your password? </Link>
                        <Link to="/register"> Create your account </Link>
                    </RedirectionStyle> 

                    <Button value="Login"></Button>
                </form>
            </ContentForm>
        </Container>
    )
}

export default Login;
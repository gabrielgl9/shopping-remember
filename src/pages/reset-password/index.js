import React, {useState} from 'react';
import { Button, TextField, ContentIntro } from '../../components';

import { Container, ContentForm } from "../../styles/helpers";

const ResetPassword = () => {
  
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
                <h2> Reset Password </h2>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        type="password" 
                        name="old_password" 
                        value={state.oldPassword} 
                        label="Old Password"
                        onChange={handleChange}/>

                    <TextField 
                        type="password" 
                        name="new_password" 
                        value={state.newPassword} 
                        label="New Password"
                        onChange={handleChange}/>

                    <Button value="Reset Password"></Button>
                </form>
            </ContentForm>
        </Container>
    )
}

export default ResetPassword;
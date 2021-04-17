import React, {useState} from 'react';
import { Button, TextField, ContentIntro } from '../../components';

import { Container } from "../../styles/container";
import { ContentForm } from "../../styles/content-form";


const ForgetPassword = () => {
  
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        console.log(event);
    }

    return (
        <Container>
            <ContentIntro></ContentIntro>
            <ContentForm>
                <h2> Recover Account </h2>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        type="email" 
                        name="email" 
                        value={email} 
                        label="E-mail"
                        onChange={(e) => setEmail(e.target.value)}/>

                    <Button value="Recover Account"></Button>
                </form>
            </ContentForm>
        </Container>
    )
}

export default ForgetPassword;
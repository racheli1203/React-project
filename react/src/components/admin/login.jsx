import { useRef, useState } from 'react';
import AdminPage from './adminPage';
import Button from '@mui/material/Button'; // Import Button from MUI
import TextField from '@mui/material/TextField'; // Import TextField from MUI
import { Container, Grid } from '@mui/material'; // Import Container and Grid from MUI

export default function LoginForm() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const nameRef = useRef();
    const passwordRef = useRef();
    const url = "http://localhost:8787";

    async function login(e) {
        e.preventDefault();
        try {
            const data = { name: nameRef.current.value, password: passwordRef.current.value }
            const res = await  fetch(url + '/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            console.log("res", res);
            if (res.status === 200) {
                setIsLoggedIn(true);
            }
            else if (res.status === 401) {
                alert("Username or password is incorrect");
                // Clear the login fields on incorrect login attempts
                nameRef.current.value = '';
                passwordRef.current.value = '';
            }
        }
        catch (err) {
            console.log("error ");
        }
    }
    return (
        <Container maxWidth="sm"> {/* Wrap form inside a Container for better spacing */}
            {isLoggedIn ? <AdminPage /> : (
                <form onSubmit={login}> {/* Use onSubmit to handle form submission */}
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item xs={12}>
                            <TextField type="text" label='Username' variant="outlined" fullWidth inputRef={nameRef} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type="password" label='Password' variant="outlined" fullWidth inputRef={passwordRef} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" type="submit" fullWidth>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Container>
    )
}

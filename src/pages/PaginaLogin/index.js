import React from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from "../../assets/images/logo.png";
import { useAuth } from "../../security/AuthProvider";



const defaultTheme = createTheme();

function PaginaLogin() {

    function fazerlogin = () => {
        const { login } = useAuth();

        login
        navigate("/inicio")

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: 'auto',
                            backgroundImage: `url(${Logo})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            paddingTop: '80%',
                        }}
                    />
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={() => { fazerlogin() }}
                            sx={{
                                mt: 3,
                                mb: 2,
                                backgroundColor: '#F2BE5C',
                                '&:hover': {
                                    backgroundColor: '#F2A13C',
                                },
                            }}
                        >
                            Entrar

                        </Button>
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <Link
                                    href="#"
                                    variant="body2"
                                    sx={{ color: '#000000', textDecoration: 'none' }}
                                >
                                    Esqueceu a senha?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    href="#"
                                    variant="body2"
                                    sx={{ color: '#000000', textDecoration: 'none' }}
                                >
                                    Cadastrar
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default PaginaLogin;

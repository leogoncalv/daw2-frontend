import React from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Figura from "../../assets/images/mascote.png";

const defaultTheme = createTheme();

function PaginaCadastro() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            nome: data.get('nome'),
            email: data.get('email'),
            password: data.get('password'),
        });
        // Add your form submission logic here (e.g., API call)
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
                            backgroundImage: `url(${Figura})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            paddingTop: '50%'
                        }}
                    />

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="nome"
                            label="Nome"
                            name="nome"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
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
                            sx={{
                                mt: 3,
                                mb: 2,
                                backgroundColor: '#F2BE5C',
                                '&:hover': {
                                    backgroundColor: '#F2A13C',
                                }
                            }}
                        >
                            Cadastrar
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default PaginaCadastro;

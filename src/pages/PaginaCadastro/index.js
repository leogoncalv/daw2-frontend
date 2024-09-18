import React, { useState } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Figura from "../../assets/images/mascote.png";
import api from "../../services/api"

import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

function PaginaCadastro() {

    const [email, setEmail] = useState("leogoncalv@user.com");
    const [senha, setSenha] = useState("123456789");
    const [user, setUser] = useState("leogoncalv");
    const [nome, setNome] = useState("leo goncalves");

    const navigate = useNavigate();

    const fazerCadastro = () => {
        if (email.trim() !== "" && senha.trim() !== "" && user.trim() !== "" && nome.trim() !== "") {
            api.login({
                identifier: email,
                password: senha,
                nome: nome,
                user: user
            })
                .then(response => {
                    console.log(response.data.jwt);
                    navigate("/login");
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fazerCadastro();
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
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
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
                            Criar conta
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default PaginaCadastro;

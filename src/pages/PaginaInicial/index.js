import React from "react";
import ImagemPrincipal from "../../Components/ImagemPrincipal";
import BarraNavegacao from "../../Components/NavBar";
import { Box, Typography } from "@mui/material";


import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';



function PaginaInicial() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <BarraNavegacao />
            <ImagemPrincipal>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        textAlign: 'center',
                        paddingTop: '20%',
                    }}
                >

                    <Paper
                        component="form"
                        sx={{
                            p: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            width: 400,
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            m: 2,
                        }}
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log('Search');
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Buscar receita"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#000000',
                            fontFamily: 'Adamina',
                            fontSize: '10',

                        }}
                    >
                        Explore novas receitas e compartilhe suas experiências na cozinha!
                    </Typography>
                </Box>
            </ImagemPrincipal>
        </Box>
    );
}

export default PaginaInicial;

import React from "react";
import ImagemPrincipal from "../../Components/ImagemPrincipal";
import BarraNavegacao from "../../Components/NavBar";
import { Box, Typography } from "@mui/material";

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
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#000000',
                            fontFamily: 'Arial',
                            fontSize: '8',

                        }}
                    >
                        Explore novas receitas e compartilhe suas experiências!
                    </Typography>
                </Box>
            </ImagemPrincipal>
        </Box>
    );
}

export default PaginaInicial;

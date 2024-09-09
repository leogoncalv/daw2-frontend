import React, { useState } from "react";
import { Grid } from "@mui/material";
import Fundo from "../../assets/images/comida.jpg";

function ImagemPrincipal({ children }) {
    // Define a opacidade inicial como 0.5
    const [opacity, setOpacity] = useState(0.5);

    // Função para lidar com a mudança no controle deslizante
    const handleOpacityChange = (event) => {
        setOpacity(event.target.value);
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={12}
                sx={{
                    backgroundImage: `url(${Fundo})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: opacity, // Aplica a opacidade ao estilo
                    height: '100vh'   // Adiciona altura para garantir que a imagem ocupe toda a tela
                }}
            >
                {children}
            </Grid>
            <Grid
                item
                xs={12}
                sx={{ display: 'flex', justifyContent: 'center', padding: '10px' }}
            >
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={opacity}
                    onChange={handleOpacityChange}
                    style={{ width: '300px' }} // Ajusta o tamanho do controle deslizante
                />
            </Grid>
        </Grid>
    );
}

export default ImagemPrincipal;

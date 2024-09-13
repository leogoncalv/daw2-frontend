import React from "react";
import { Grid } from "@mui/material";
import Fundo from "../../assets/images/comida.jpg";

function ImagemPrincipal({ children }) {
    return (
        <Grid container component="main" sx={{ height: '100vh', position: 'relative' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={12}
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                }}
            >

                <Grid
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${Fundo})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.5,
                        zIndex: -1,
                    }}
                />
                {children}
            </Grid>
        </Grid>
    );
}

export default ImagemPrincipal;

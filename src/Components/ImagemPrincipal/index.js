
import React from "react";
import { Grid } from "@mui/material";

import Fundo from "../../assets/images/comida.jpg"

function ImagemPrincipal({ children }) {
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={12}
                className="='image"
                sx={{
                    backgroundImage: `url(${Fundo})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "cover",
                    backgroundPosition: 'center'
                }}
            >

                {children}
            </Grid>
        </Grid>
    )
}


export default ImagemPrincipal;


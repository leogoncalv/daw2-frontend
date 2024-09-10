import React from "react"

import ImagemPrincipal from "../../Components/ImagemPrincipal";
import BarraNavegacao from "../../Components/NavBar";
import { Box } from "@mui/material";


function PaginaInicial() {

    return (
        <Box>

            <BarraNavegacao />
            <ImagemPrincipal>

                <Box>
                    texto 1
                </Box>

            </ImagemPrincipal>
        </Box>
    );


}

export default PaginaInicial; 
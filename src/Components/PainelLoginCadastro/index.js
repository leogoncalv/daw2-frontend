import React from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Logo from "../../assets/images/logo.png"

function PainelLoginCadastro() {

    return (

        <Box>

            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />



            <Button variant="contained" disableElevation>
                Disable elevation
            </Button>

        </Box>



    );


}

export default PainelLoginCadastro;


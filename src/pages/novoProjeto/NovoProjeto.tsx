import { useTheme } from "@emotion/react";
import { Box,  Button,  Grid,  Input,  Paper,  TextField,  Typography } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';



export const NovoProjeto = () => {

    const theme = useTheme();

    return (

        

       
        <><Grid container>


            <Paper>

                <Typography variant="h4" color="primary">Novo Projeto</Typography>

            
                    <Box>


                        <Box display="flex" flexDirection="column">


                            <Grid item>
                                <TextField id="nome-projeto" label="Nome:" variant="standard" />

                            </Grid>

                            <Grid item>

                                <TextField id="standard-multiline-static" label="Descrição" multiline rows={4}
                                    variant="standard" />

                            </Grid>

                            <Grid item>
                                <Button variant="contained" startIcon={<AddIcon />}>Adicionar Etapa</Button>

                            </Grid>


                        </Box>




                        <Box display="flex" flexDirection="row">

                            <Button variant="contained" startIcon={<AddIcon />}>Descartar</Button>
                            <Button variant="contained" startIcon={<AddIcon />}>Criar Projeto</Button>


                        </Box>




                    </Box>


            </Paper>

        </Grid></>
        
        
        
        
       

       

       



    )


}

    
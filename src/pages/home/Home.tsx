import { Box, Button, Card, CardContent, Container, Grid, Paper, Stack, Typography, useTheme,} from "@mui/material"


export const Home = () => {

    const theme = useTheme();
    
    return(
        
        <Box width= "100vw" marginTop={theme.spacing(0)} color="secondary">
            <Container maxWidth= "xl">
                <Grid  container direction="column" alignItems="center" justifyContent="center">

                    <Grid item marginTop={theme.spacing(5)}>

                        <Paper  sx={{padding:"1.2em", borderRadius:"28px"}}>

                            <Box width={"80vw"} height={"30vh"}>

                                
    
                            </Box>

                        </Paper>

                    </Grid>

                    <Grid item marginTop={theme.spacing(3)}>

                        <Paper  sx={{padding:"1.2em", borderRadius:"28px"}}>

                            <Box width={"80vw"} height={"30vh"}>
                            
                            </Box>

                        </Paper>

                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}
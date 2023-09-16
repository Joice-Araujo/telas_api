import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Grid, IconButton, Paper, Stack, Typography, colors, useTheme, } from "@mui/material"


import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';

export const Home = () => {

    const theme = useTheme();

    return (

        <div>
            <Grid container spacing={2}>

                <Grid item>

                    <Card sx={{ minWidth: 180 }}>
                        <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>

                            <CardHeader action={
                                <IconButton aria-label="atrasados">
                                    <RunningWithErrorsIcon sx={{ width: 38, height: 38, alignItems: "center" }} />
                                </IconButton>

                            } />

                            <Typography variant="h5" component="div">
                                Atrasados
                            </Typography>
                            <Typography variant="h5" component="div">
                                be-nev-o-lent
                            </Typography>

                        </CardContent>

                    </Card>
                </Grid>

                <Grid item>

                    <Card sx={{ minWidth: 180 }}>
                        <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>

                            <CardHeader action={
                                <IconButton aria-label="atrasados">
                                    <RunningWithErrorsIcon sx={{ width: 38, height: 38, alignItems: "center" }} />
                                </IconButton>

                            } />

                            <Typography variant="h5" component="div">
                                Atrasados
                            </Typography>
                            <Typography variant="h5" component="div">
                                be-nev-o-lent
                            </Typography>

                        </CardContent>

                    </Card>
                </Grid>

                <Grid item>

                    <Card sx={{ minWidth: 180 }}>
                        <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>

                            <CardHeader action={
                                <IconButton aria-label="atrasados">
                                    <RunningWithErrorsIcon sx={{ width: 38, height: 38, alignItems: "center" }} />
                                </IconButton>

                            } />

                            <Typography variant="h5" component="div">
                                Atrasados
                            </Typography>
                            <Typography variant="h5" component="div">
                                be-nev-o-lent
                            </Typography>

                        </CardContent>

                    </Card>
                </Grid>

                <Grid item>

                    <Card sx={{ minWidth: 180 }}>
                        <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>

                            <CardHeader action={
                                <IconButton aria-label="atrasados">
                                    <RunningWithErrorsIcon sx={{ width: 38, height: 38, alignItems: "center" }} />
                                </IconButton>

                            } />

                            <Typography variant="h5" component="div">
                                Atrasados
                            </Typography>
                            <Typography variant="h5" component="div">
                                be-nev-o-lent
                            </Typography>

                        </CardContent>

                    </Card>
                </Grid>

                <Grid item>

                    <Card sx={{ minWidth: 180 }}>
                        <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>

                            <CardHeader action={
                                <IconButton aria-label="atrasados">
                                    <RunningWithErrorsIcon sx={{ width: 38, height: 38, alignItems: "center" }} />
                                </IconButton>

                            } />

                            <Typography variant="h5" component="div">
                                Atrasados
                            </Typography>
                            <Typography variant="h5" component="div">
                                be-nev-o-lent
                            </Typography>

                        </CardContent>

                    </Card>
                </Grid>


            </Grid>



        </div>




















        // <Box width= "100vw" marginTop={theme.spacing(0)}>
        //     <Container maxWidth= "xl">
        //         <Grid  container direction="column" alignItems="center" justifyContent="center">

        //             <Grid item marginTop={theme.spacing(5)}>

        //                 <Paper  sx={{padding:"1.2em", borderRadius:"28px"}}>

        //                     <Box width={"80vw"} height={"30vh"}>



        //                     </Box>

        //                 </Paper>

        //             </Grid>

        //             <Grid item marginTop={theme.spacing(3)}>

        //                 <Paper  sx={{padding:"1.2em", borderRadius:"28px"}}>

        //                     <Box width={"80vw"} height={"30vh"}>

        //                     </Box>

        //                 </Paper>

        //             </Grid>

        //         </Grid>
        //     </Container>
        // </Box>
    )
}
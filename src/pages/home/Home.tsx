import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Grid, IconButton, Paper, Stack, Typography, colors, useTheme, } from "@mui/material"


import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';

export const Home = () => {

    const theme = useTheme();

    return (

        <div>

            <Box   display="flex" alignItems="center" justifyContent="center" maxHeight="100vh"
             flexDirection="column" gap={theme.spacing(4)}  marginTop={theme.spacing(2)}>


            <Paper  sx={{ padding: 2, borderRadius: 5 }} color= "secondary">
                <Typography variant="h5">Estimativa de Projetos</Typography>
                <Grid container spacing={2} alignItems="center">

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

            </Paper>

            <Paper  sx={{ padding: 2, borderRadius: 5 }} color= "secondary">
                <Typography variant="h5">Visão Geral</Typography>

                {/* <Grid container spacing={2} alignItems="center"> */}

                    <Box display="flex" flexDirection="row" gap={theme.spacing(3)}>

                        <Box  display="flex" flexDirection="row" gap={theme.spacing(3)} >

                            <Grid item>

                                <Card sx={{ maxWidth: 250 }}>
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

                        </Box>

                        <Box  display="flex" flexDirection="column" gap={theme.spacing(4.4)} >

                            <Grid item>

                                <Card>
                                    <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>

                                    <Typography variant="h6" component="div"> Mais entregas </Typography>

                                    </CardContent>

                                </Card>
                            </Grid>

                            <Grid item>

                                <Card sx={{ maxWidth: 180 }}>
                                    <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>

                                    <Typography variant="h6" component="div"> Mais entregas </Typography>

                                        
                                    </CardContent>

                                </Card>
                            </Grid>

                        </Box>
                    
                    </Box>

                {/* </Grid> */}

            </Paper>

            </Box>

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
import { Button, ButtonBase, IconButton } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";


export  const AppRoutes= () =>{

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Button>Login</Button>}/>

            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>

        </Routes>

    );
};
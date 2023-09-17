
import { Routes, Route, Navigate } from "react-router-dom";
// import { useAppThemeContext } from "../shered/contexts";
import { Home, NovoProjeto } from "../pages";


export  const AppRoutes = () =>{
    // const {toggleTheme} = useAppThemeContext();

    return(
        <Routes>
            <Route path="/home" element={<Home/>}  />

            <Route path="/novoProjeto" element={<NovoProjeto/>}/>
            


            <Route path="*" element={<Navigate to="/home"/>}/>

        </Routes>

    );
};
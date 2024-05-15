import React from "react";
import {Route, Routes} from "react-router-dom";
import AddEmpComponent from "../components/AddEmpComponent";
import EmpListComponent from "../components/EmpListComponent";
import UpdateEmpComponent from "../components/UpdateEmpComponent";
import DeleteEmpComponent from "../components/DeleteEmpComponent";


const NavigationRoutes = (
        <Routes>

            <Route exact path="//employees" element={<EmpListComponent/>}/>
            <Route exact path="/employees/add" element={<AddEmpComponent/>}/>
            <Route path="/employees/update" element={<UpdateEmpComponent/>}/>
            <Route path="/employees/delete" element={< DeleteEmpComponent/>}/>

        </Routes>
    )
;
export default NavigationRoutes;
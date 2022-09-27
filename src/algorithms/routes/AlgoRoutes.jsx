import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from '../../ui/components/Navbar'
import { 
    Inicio,
    RutaMasCorta,
    ProblemaDeLaMochila,
    ReemplazoDeEquipo,
    ArbolesBinariosDeBusquedaOptima,
    SeriesDeportivas,
    MultiplicacionDeMatrices
} from "../pages/index"

export const AlgoRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container">
                <Routes>
                    <Route path="inicio" element={<Inicio/>}/>
                    <Route path="rutaMasCorta" element={<RutaMasCorta/>}/>
                    <Route path="problemaDeLaMochila" element={<RutaMasCorta/>}/>
                    <Route path="reemplazoDeEquipo" element={<RutaMasCorta/>}/>
                    <Route path="arbolesBinariosDeBusquedaOptimos" element={<RutaMasCorta/>}/>
                    <Route path="seriesDeportivas" element={<RutaMasCorta/>}/>
                    <Route path="multiplicacionDeMatrices" element={<RutaMasCorta/>}/>

                    <Route path="/" element={<Navigate to="/inicio"/>} />
                </Routes>
            </div>
            
        </>
    )
}

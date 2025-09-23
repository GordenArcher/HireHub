import { Route, Routes } from "react-router-dom"
import AuthRoutes from "../authroutes/routes"
import HomeRoutes from "../homeroutes/routes"

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/*" element={ <HomeRoutes />} />
            <Route path="/auth/*" element={ <AuthRoutes /> } />
        </Routes>
    )
}
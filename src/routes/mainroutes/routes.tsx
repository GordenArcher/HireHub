import { Route, Routes } from "react-router-dom"
import AuthRoutes from "../authroutes/routes"
import HomeRoutes from "../homeroutes/routes"
import CompanyVerificationDashboard from "../../pages/auth/pages/admin/CompanyVerificationDashboard"

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/*" element={ <HomeRoutes />} />
            <Route path="/auth/*" element={ <AuthRoutes /> } />
            <Route path="/admin/dashboard" element={ <CompanyVerificationDashboard />} />
        </Routes>
    )
}
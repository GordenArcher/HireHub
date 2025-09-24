import { Navigate, Route, Routes } from "react-router-dom"
import Landing from "../../pages/main/landing/Landing"
import NavBar from "../../layouts/landing/NavBar"
import Footer from "../../layouts/Footer"
import FindJob from "../../pages/main/candidates/FindJob"
import Dashboard from "../../components/dashboard/dashboard"
import JobDetails from "../../pages/main/landing/JobDetails"
import { useAuthStore } from "../../stores/useAuthStore"

const HomeRoutes = () => {
    const { isAuthenticated } = useAuthStore()
    return (
        <div className="w-full h-full relative bg-white">
            <div className="flex flex-col">
                <section>
                    <NavBar />
                </section>

                <section className="w-full max-w-6xl m-auto">
                    <Routes>
                        <Route path="/" element={ <Landing /> } />
                        <Route path="/find-job" element={ <FindJob /> } />
                        <Route path="me/dashboard" element={ isAuthenticated ? <Dashboard /> : <Navigate to={"/"} /> } />
                        
                        <Route path="position/details/:id" element={ <JobDetails /> } />
                    </Routes>
                </section>

                <Footer />
                
            </div>
            
        </div>
    )
}

export default HomeRoutes
import { Route, Routes } from "react-router-dom"
import Landing from "../../pages/main/landing/Landing"
import NavBar from "../../layouts/landing/NavBar"
import Footer from "../../layouts/Footer"
import FindJob from "../../pages/main/candidates/FindJob"
import Dashboard from "../../pages/main/candidates/dashboard/dashboard"
import JobDetails from "../../pages/main/landing/JobDetails"

const HomeRoutes = () => {
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
                        <Route path="me/dashboard" element={ <Dashboard /> } />
                        <Route path="position/details/:id" element={ <JobDetails /> } />
                    </Routes>
                </section>
                <Footer />
                
            </div>
            
        </div>
    )
}

export default HomeRoutes
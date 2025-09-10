import { Route, Routes } from "react-router-dom"
import Landing from "../../pages/main/landing/Landing"
import NavBar from "../../layouts/landing/NavBar"

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
                    </Routes>
                </section>
                
            </div>
            
        </div>
    )
}

export default HomeRoutes
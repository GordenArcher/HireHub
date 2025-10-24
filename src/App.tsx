import { Bounce, ToastContainer } from "react-toastify"
import Loading from "./components/Loading/Loading"
import { useAuthStore } from "./stores/useAuthStore"

import MainRoutes from "./routes/mainroutes/routes"
import { useEffect } from "react"
import { UseCompanyStore } from "./stores/UseCompanyStore"
// import { useNavigate } from "react-router-dom"

function App() {
  const { isGettingUser, isGettingAuth, fetchAuth, fetchUser, fetchSocials, user} = useAuthStore()
  const { fetchCompany } = UseCompanyStore()

  // const navigate = useNavigate()

  useEffect(() => {
    fetchAuth();
    fetchUser();
    fetchSocials();
    
  },[fetchAuth, fetchUser, fetchSocials]);

  useEffect(() => {
    if (user?.user_type === "EM") {
      fetchCompany();
    }
  }, [user, fetchCompany]);

  // useEffect(() => {
  //   if (company && !company.onboarded) {
  //     navigate("/auth/employer/setup");
  //   }
  // }, [company]);

  if(isGettingUser || isGettingAuth){
    return <Loading />
  }
  
  

  return (
    <section className="w-full h-full relative">
      <MainRoutes />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        />
    </section>
  )
}

export default App

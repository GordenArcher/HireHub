
import { Bounce, ToastContainer } from "react-toastify"
import Loading from "./components/Loading/Loading"
import MainRoutes from "./routes/mainroutes/routes"


function App() {

  const loading = false

  if(loading) return <Loading />

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

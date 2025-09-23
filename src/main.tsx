import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import UseAuthContextProvider from './pages/auth/context/UseAuthContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <UseAuthContextProvider>
      <App />
    </UseAuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)

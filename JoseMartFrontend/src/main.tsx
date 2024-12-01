import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { AllRoutes } from './Components/Routes/AllRoutes.tsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={AllRoutes}></RouterProvider>
  </StrictMode>,
)
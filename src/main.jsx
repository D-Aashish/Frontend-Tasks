import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Testimonial from './components/testimonialhover.jsx'
import Feature from './components/feature.jsx'
import TilesGrid from './components/tiles.jsx'
const rout = createBrowserRouter([
  {path:"/",element:<App/>},
   {path:"/feature",element:<Feature/>},
   {path:"/task",element:<Testimonial/>},
   {path:"/tiles",element:<TilesGrid/>},
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider  router={rout}/>
  </StrictMode>,
)

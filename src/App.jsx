import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/Navbar.jsx'

import './App.css'
import PageRoutes from './components/routes/PageRoutes.jsx'

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <PageRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import './global.css'
import { BrowserRouter } from "react-router-dom"
import { Router } from "./router"

function App() {
  //

  return (
    <BrowserRouter>
      <Header/>

      <Router/> {/* Conteúdo das páginas */}
      
      <Footer/>
    </BrowserRouter>
  )
}

export default App

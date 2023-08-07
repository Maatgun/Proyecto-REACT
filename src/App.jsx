import Layout from "./components/Layout/Layout"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Categorias from "./components/Categorias/Categorias"
import CardsProductos from "./components/productos/CardsProductos"
import Footer from "./components/Footer/Footer"

function App() {
 
  return (
    <>
    <Navbar/>
    <Layout>
      <Hero/>
      <Categorias/>
      <CardsProductos/>
    </Layout>
    <Footer/>
    </>
  )
}

export default App

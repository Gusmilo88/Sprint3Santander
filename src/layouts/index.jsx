import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Header from "../components/Header"
import VistaSelector from "../components/VistaSelector"

const Layouts = ({children}) => {
  return (
    <>
      <Header/>
      <Carousel/>
      <VistaSelector/>
      {children}
      <Footer/>
    </>
  )
}

export default Layouts

import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Layouts = ({children}) => {
  return (
    <>
      <Header/>
      <Carousel/>
      {children}
      <Footer/>
    </>
  )
}

export default Layouts

import './App.css'
import Cards from './components/Cards'
import Carousel from './components/Carousel'
import Checkboxs from './components/Checkboxs'
import Footer from './components/Footer'
import Header from './components/Header'
import SearchBar from './components/SearchBar/index.'
import VistaSelector from './components/VistaSelector'

function App() {

  return (
    <>
      <Header/>
      <Carousel/>
      <VistaSelector/>
      <SearchBar/>
      <Checkboxs/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default App

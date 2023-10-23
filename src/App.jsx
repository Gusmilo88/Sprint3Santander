import './App.css'
import Cards from './components/Cards'
import Carousel from './components/Carousel'
import Checkboxs from './components/Checkboxs'
import DivH2 from './components/DivH2'
import Footer from './components/Footer'
import Header from './components/Header'
import SearchBar from './components/SearchBar/index.'
import VistaSelector from './components/VistaSelector'

function App() {

  return (
    <>
      <Header/>
      <Carousel/>
      <VistaSelector title="Home"/>
      <SearchBar/>
      <Checkboxs/>
      <DivH2 title="Todos nuestros eventos:"/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default App

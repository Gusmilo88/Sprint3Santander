import Cards from '../../components/Cards'
import Checkboxs from '../../components/Checkboxs'
import DivH2 from '../../components/DivH2'
import VistaSelector from '../../components/VistaSelector'
import SearchBar from '../../components/SearchBar'
import Layouts from '../../layouts'




const Home = () => {
  return (
    <>
      <Layouts>
      <VistaSelector title="Home"/>
      <SearchBar/>
      <Checkboxs/>
      <DivH2 title="Todos nuestros eventos:"/>
      <Cards/>
      </Layouts>
    </>
  )
}

export default Home

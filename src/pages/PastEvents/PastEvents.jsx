import Cards from '../../components/Cards'
import Checkboxs from '../../components/Checkboxs'
import DivH2 from '../../components/DivH2'
import VistaSelector from '../../components/VistaSelector'
import SearchBar from '../../components/SearchBar'
import Layouts from '../../layouts'

const PastEvents = () => {
  return (

    <>
      <Layouts>
      <VistaSelector title="Past Events"/>
      <SearchBar/>
      <Checkboxs/>
      <DivH2 title="Experiencias que hicieron historia:"/>
      <Cards/>
      </Layouts>
    </>
    
  )
}

export default PastEvents

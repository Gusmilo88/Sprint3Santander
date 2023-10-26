import Cards from '../../components/Cards'
import Checkboxs from '../../components/Checkboxs'
import DivH2 from '../../components/DivH2'
import VistaSelector from '../../components/VistaSelector'
import SearchBar from '../../components/SearchBar'
import Layouts from '../../layouts'
import Carousel from '../../components/Carousel'

const PastEvents = () => {
  return (

    <>
      <Layouts>
      <Carousel/>
      <VistaSelector title="Past Events" arrowLeft="/upcomingEvents" arrowRight="/contact"/>
      <SearchBar/>
      <Checkboxs/>
      <DivH2 title="Experiencias que hicieron historia:"/>
      <Cards/>
      </Layouts>
    </>
    
  )
}

export default PastEvents

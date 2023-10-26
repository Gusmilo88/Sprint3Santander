import Cards from '../../components/Cards'
import Checkboxs from '../../components/Checkboxs'
import DivH2 from '../../components/DivH2'
import VistaSelector from '../../components/VistaSelector'
import SearchBar from '../../components/SearchBar'
import Layouts from '../../layouts'
import Carousel from '../../components/Carousel'

const UpcomingEvents = () => {
  return (
    <>
      <Layouts>
      <Carousel/>
      <VistaSelector title="Upcoming Events" arrowLeft="/" arrowRight="/pastEvents"/>
      <SearchBar/>
      <Checkboxs/>
      <DivH2 title="¡Próximas experiencias emocionantes!"/>
      <Cards/>
      </Layouts>
    </>
  )
}

export default UpcomingEvents

import Cards from '../../components/Cards'
import Checkboxs from '../../components/Checkboxs'
import DivH2 from '../../components/DivH2'
import VistaSelector from '../../components/VistaSelector'
import SearchBar from '../../components/SearchBar'
import Layouts from '../../layouts'

const UpcomingEvents = () => {
  return (
    <>
      <Layouts>
      <VistaSelector title="Upcoming Events"/>
      <SearchBar/>
      <Checkboxs/>
      <DivH2 title="¡Próximas experiencias emocionantes!"/>
      <Cards/>
      </Layouts>
    </>
  )
}

export default UpcomingEvents

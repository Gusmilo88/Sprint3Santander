import Cards from '../../components/Cards'
import Checkboxs from '../../components/Checkboxs'
import DivH2 from '../../components/DivH2'
import VistaSelector from '../../components/VistaSelector'
import SearchBar from '../../components/SearchBar'
import Layouts from '../../layouts'
import Carousel from '../../components/Carousel'
import { useEffect, useState } from 'react'
import axios from 'axios'



const UpcomingEvents = () => {

  let [events, setEvents] = useState([])

  useEffect(() => {
    axios.get("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => {
      setEvents(response.data.events)
    })
  }, [])

  return (
    <>
      <Layouts>
      <Carousel/>
      <VistaSelector title="Upcoming Events" arrowLeft="/" arrowRight="/pastEvents"/>
      <SearchBar/>
      <Checkboxs/>
      <DivH2 title="¡Próximas experiencias emocionantes!"/>
      {
        events.map(evento => {

          return(

            <Cards evento={evento} buttonText="See more"/>
            
          )

        })
      }
      </Layouts>
    </>
  )
}

export default UpcomingEvents

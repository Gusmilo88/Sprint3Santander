import Cards from '../../components/Cards'
import Checkboxs from '../../components/Checkboxs'
import DivH2 from '../../components/DivH2'
import VistaSelector from '../../components/VistaSelector'
import SearchBar from '../../components/SearchBar'
import Layouts from '../../layouts'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from '../../components/Carousel'




const Home = () => {

  let [events, setEvents] = useState([])

  useEffect(() => {
    axios.get("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => {
      setEvents(response.data.events)
    })
  })


  return (
    <>
      <Layouts>
      <Carousel/>
      <VistaSelector title="Home" arrowLeft="/stats" arrowRight="/upcomingEvents"/>
      <SearchBar/>
      <Checkboxs/>
      <DivH2 title="Todos nuestros eventos:"/>
      {
        events.map(evento => {

          return(

            <Cards evento={evento} />
            
          )

        })
      }
      </Layouts>
    </>
  )
}

export default Home

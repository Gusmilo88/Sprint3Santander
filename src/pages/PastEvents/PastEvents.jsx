import Cards from '../../components/Cards'
import Checkboxs from '../../components/Checkboxs'
import DivH2 from '../../components/DivH2'
import VistaSelector from '../../components/VistaSelector'
import SearchBar from '../../components/SearchBar'
import Layouts from '../../layouts'
import Carousel from '../../components/Carousel'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PastEvents = () => {

  function getPastEvents(events, currentDate) {

    return events.filter(event => new Date(event.date) < new Date(currentDate));

  }

  const [events, setEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]); // Almacenamos solo los eventos pasados con el filtrado.

  useEffect(() => {
    axios.get("src/data/data.json")
      .then((response) => {
        setEvents(response.data.events);

        const filteredPastEvents = getPastEvents(response.data.events, "2023-03-10");
        setPastEvents(filteredPastEvents);
      });
  }, []);


  return (

    <>
      <Layouts>
      <Carousel/>
      <VistaSelector title="Past Events" arrowLeft="/upcomingEvents" arrowRight="/contact"/>
      <SearchBar/>
      <Checkboxs/>
      <DivH2 title="Experiencias que hicieron historia:"/>
      {pastEvents.map(evento => (
          <Cards key={evento._id} evento={evento} buttonText="See more" pathText={`/details/${evento._id}`} />
        ))}
      </Layouts>
    </>
    
  )
}

export default PastEvents

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

  let [eventos, setEventos] = useState([])
  let [eventosFiltrados, setEventosFiltrados] = useState([])


  useEffect(() => {
    axios.get("src/data/data.json")
    .then((response) => {
      setEventos(response.data.events)
      setEventosFiltrados(response.data.events)
    })
  },[])


  return (
    <>
      <Layouts>
      <Carousel/>
      <VistaSelector title="Home" arrowLeft="/stats" arrowRight="/upcomingEvents"/>
      <SearchBar setEventosFiltrados={setEventosFiltrados} />
      <Checkboxs/>
      <DivH2 title="Todos nuestros eventos:"/>
      <div className="grid grid-cols-1 md:grid-cols-2">
          {eventosFiltrados.map((evento) => (
            <Cards
              key={evento._id}
              evento={evento}
              buttonText="See more"
              pathText={"/details/" + evento._id}
            />
          ))}
        </div>
      </Layouts>
    </>
  )
}

export default Home

import { useParams } from "react-router-dom"

const EventInfo = () => {

  let params = useParams()

  return (
    <div>
        <div id="contenedorH1">
          <h2>{params.id}</h2>
        </div>
        <div id="contenedorP">
          <p>ads</p>
        </div>
        <div id="contenedorSpan">
          <span>asd</span>
        </div>
      </div>
  )
}

export default EventInfo

  
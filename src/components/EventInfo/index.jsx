
const EventInfo = ({id, description, price}) => {


  return (
    <div>
        <div id="contenedorH1">
          <h2>{id}</h2>
        </div>
        <div id="contenedorP">
          <p>{description} </p>
        </div>
        <div id="contenedorSpan">
          <span>{price} </span>
        </div>
      </div>
  )
}

export default EventInfo

  
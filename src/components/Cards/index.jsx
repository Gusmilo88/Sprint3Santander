import './style.css'

const Cards = () => {
  return (
    <div>
  <div className="events_area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="main_title">
          </div>
        </div>
      </div>
      <div className="row">
        <div className="single_event position-relative">
          <div className="event_thumb">
            <img className="event-image" src="${evento.image}" alt />
          </div>
          <div className="event_details">
            <div className="d-flex mb-4">
              <div className="date"><span>Fecha</span></div>
              <div className="time-location">
                <p><span className="ti-time mr-2" /> 12:00 AM - 12:30 AM</p>
                <p><span className="ti-location-pin mr-2" />Lugar</p>
              </div>
            </div>
            <h2 id="eventCardName" className="mb-2">Nombre del evento</h2>
            <p>
              Descripción del evento
            </p>
            <a href="../../src/details.html?eventName=${evento.name}&eventImage=${evento.image}&eventDescription=${evento.description}&eventPrice=${evento.price}" id="btnSeeMore" className="btn mt-3">Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Cards

import'./style.css'
import Layouts from '../../layouts/index'

const Details = () => {
  return (
    <Layouts>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      {/* Contenedor de la imagen del evento */}
      <div id="contenedorImg">
      </div>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        {/* Contenedor del nombre del evento */}
        <div id="contenedorH1">
          <h2>Nombre del evento</h2>
        </div>
        {/* Contenedor de la descrpción del evento */}
        <div id="contenedorP">
          <p>Descripción del evento</p>
        </div>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
        </div>
        <div className="flex">
          {/* Contenedor del precio del evento */}
          <div id="contenedorSpan">
            <span>$ 1500</span>
          </div>
          <button id="btnSeeMore" className="flex ml-auto py-2 px-6 focus:outline-none ">Buy</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    </Layouts>
  )
}

export default Details

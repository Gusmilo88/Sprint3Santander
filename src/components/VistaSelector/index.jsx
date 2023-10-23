import'./style.css'

const VistaSelector = () => {
  return (
    <div>
      <div
        id="container_h2"
        className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-zinc-900"
      >
        <h2 id="h2_events">
          <a href="./stats.html">
            <i className="fa-solid fa-arrow-left fa-beat-fade" />
          </a>{" "}
          Home{" "}
          <a href="./upcomingEvents.html">
            <i className="fa-solid fa-arrow-right fa-beat-fade" />
          </a>
        </h2>
      </div>
    </div>
  );
}

export default VistaSelector

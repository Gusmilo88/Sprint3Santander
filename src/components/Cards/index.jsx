import "./style.css";

const Cards = () => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-center">
          <span
            id="span1"
            className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white"
          >
            <i
              className="fa-solid fa-clock fa-beat"
              style={{ color: "#ffffff" }}
            />{" "}
            22/22/23
          </span>
          <span
            id="span2"
            className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white"
          >
            <i
              className="fa-solid fa-location-dot fa-beat"
              style={{ color: "#ffffff" }}
            />{" "}
            #travel
          </span>
        </div>
        <div className="mb-12 pb-1 pt-1 text-center">
          <button
            id="btn-seeMore"
            className="mb-3 inline-block rounded px-10 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

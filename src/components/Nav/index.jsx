import { Link } from 'react-router-dom'
import'./style.css'

const Nav = () => {
  return (
    <div>
      <nav className="bg-zinc-900">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
              </div>
              <div className="flex flex-shrink-0 items-center">
                <Link to={"/"}>
                  <img
                    id="imgLogo"
                    className="h-16 w-auto"
                    src="/src/assets/images/logo.png"
                    alt="Logo Amazing Events"
                  />
                </Link>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link
                      to={"/"}
                      className="text-white hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      <i
                        className="fa-solid fa-house"
                        style={{color: "#ffffff"}}
                      ></i>
                      Home
                    </Link>
                    <Link
                      to={"upcomingEvents"}
                      className="text-white hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      <i
                        className="fa-solid fa-calendar"
                        style={{color: "#ffffff"}}
                      ></i>
                      Upcoming Events
                    </Link>
                    <Link
                      to={"/pastEvents"}
                      className="text-white hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      <i
                        className="fa-solid fa-calendar-check"
                        style={{color: "#fcfcfc"}}
                      ></i>
                      Past Events
                    </Link>
                    <Link
                      to={"/contact"}
                      className="text-white hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      <i
                        className="fa-solid fa-envelope"
                        style={{color: "#ffffff"}}
                      ></i>
                      Contact
                    </Link>
                    <Link
                      to={"/stats"}
                      className="text-white hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      <i
                        className="fa-solid fa-chart-line"
                        style={{color: "#ffffff"}}
                      ></i>
                      Stats
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu state. */}
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <a
                id="iconsNavMobile"
                href="./home.html"
                className=" text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                <i className="fa-solid fa-house" style={{color: "#ffffff"}}></i>
                Home
              </a>
              <a
                id="iconsNavMobile"
                href="./upcomingEvents.html"
                className="text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                <i className="fa-solid fa-calendar" style={{color: "#ffffff"}}></i>
                Upcoming Events
              </a>
              <a
                id="iconsNavMobile"
                href="./pastEvents.html"
                className="text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                <i
                  className="fa-solid fa-calendar-check"
                  style={{color: "#fcfcfc"}}
                ></i>
                Past Events
              </a>
              <a
                id="iconsNavMobile"
                href="./contact.html"
                className="text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                <i className="fa-solid fa-envelope" style={{color: "#ffffff"}}></i>
                Contact
              </a>
              <a
                id="iconsNavMobile"
                href="./stats.html"
                className="text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                <i
                  className="fa-solid fa-chart-line"
                  style={{color: "#ffffff"}}
                ></i>
                Stats
              </a>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Nav

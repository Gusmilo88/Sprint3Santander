import NotFound from "./pages/NotFound"
import Contact from "./pages/Contact"
import Details from "./pages/Details"
import Home from "./pages/Home"
import Stats from "./pages/Stats"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import UpcomingEvents from "./pages/UpcomingEvents"
import PastEvents from "./pages/PastEvents/PastEvents"

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/upcomingEvents" element={<UpcomingEvents/>}/>
          <Route path="/pastEvents" element={<PastEvents/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/stats" element={<Stats/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>
  )
}

export default App

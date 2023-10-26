import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Stats from "./pages/Stats"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/stats" element={<Stats/>}/>
          {/* <Route path="*" element={<404NotFound/>}/> */}
        </Routes>
      </Router>

      
    </>
  )
}

export default App

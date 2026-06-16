import {Navbar} from "./Components/Navbar"
import {About} from "./Components/About"
import {Home} from "./Components/Home"
import {Services} from "./Components/Services"
import {Blog} from "./Components/Blog"
import {AddP} from "./Components/AddP";
import {Contact} from "./Components/Contact"
import {Routes , Route} from "react-router-dom"
function App() {
 
  
  return (
    <>
    <Navbar/> 
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/add" element={<AddP />} />
      

    
    </Routes>
    
    
   
    </>
  )
}

export default App


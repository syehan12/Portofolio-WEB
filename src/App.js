import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Main from "./page/Main";
import About from "./page/About";
import Contact from "./page/Contact"
import Blog from "./page/Blog"




function App() {

  return(

      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="Blog" element={<Blog/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Contact" element={<Contact/>}/>
        </Routes>
      </Router>
  );

} 

export default App; 
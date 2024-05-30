import '../style/Main.css'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import Mainpage from '../components/Mainpage'




export default function Main() {



  return (
    <>
      <div className="Main">
          <Navbar LiclassHome="active"/>
          <Mainpage/>
         
      </div>  
    </>
  )
}

import { useNavigate } from "react-router-dom"


export default function Navbar(props) {

  const navigate = useNavigate()

  const routes = {
    Home : '/',
    Blog : '/Blog',
    About : '/About',
    Contact : '/Contact',

  }

  function Btnpindah(route){
    navigate(routes[route])
  }

  return (
    <div className="Navbar">
      <div className='bag1'>
        <h1>SYEHAN AULIA ISKANDAR</h1>
      </div>
      <div className='bag2'>
        <ul className='navul'>
          <li className={props.LiclassHome}><button onClick={() => Btnpindah('Home')}>HOME</button></li>
          <li className={props.LiclassBlog}><button onClick={() => Btnpindah('Blog')}>BLOG</button></li>
          <li className={props.LiclassAbout}><button onClick={() => Btnpindah('About')}>ABOUT</button></li>
          <li className={props.LiclassContact}><button onClick={()=> Btnpindah('Contact')}>CONTACT</button></li>
        </ul>
      </div>
  </div>

  )
}

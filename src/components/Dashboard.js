import Fotobox from "./elements/Fotobox";
import Titlebox from "./elements/Titlebox";



function Dashboard() {

return(
  <>
    <div className='dashboard'>
      <div className='box'>
        <Titlebox/>
        <Fotobox/>
      </div>
    </div>
  </>
)


}

export default Dashboard;
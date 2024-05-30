import Dashboard from "./Dashboard"
import iconComputer from "../asset/computer-icon.png"



export default function Mainpage() {
  return (
    <>
       <div className="Page"> 
            <div className='linePage'>
              <Dashboard/>

              <div className="webTech">
                <div className="titleWt">
                  <h1>Website Technology </h1>
                  <img src={iconComputer}/>
                </div>

                <div className="contentWt">
                  <div className="boxcontentWt"></div>
                  <div className="boxcontentWt"></div>
                  <div className="boxcontentWt"></div>
                  <div className="boxcontentWt"></div>
                  <div className="boxcontentWt"></div>
                  <div className="boxcontentWt"></div>
                  <div className="boxcontentWt"></div>
                </div>
                
              </div>


            </div>
            <div className='bgDashboard'/>
            <div className='bgWebtech'/>
        </div> 
    </>
  )
}

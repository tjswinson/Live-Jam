import './styles.css'
import { NavLink } from "react-router-dom";


function Welcome() {
  
return(

    <>
         <div className="y-wrap">
            <h1>Welcome to Live Jam</h1>
            <p>The interactive concert tracker</p> 
                 <nav className="navs">
          <ul>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/UserForm">Register</NavLink></li>
            </ul>
          </nav>
          </div>
        </>
)
      
    }
  

 
  export default Welcome;



  
   

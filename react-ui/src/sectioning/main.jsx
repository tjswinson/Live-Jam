import { Route, Routes, useNavigate } from 'react-router-dom';
import Welcome from "../welcome";
import Login from "../Login";
import UserForm from '../UserForm';
import { useSelector } from 'react-redux';
import EventSearch from "../componenents/EventSearch";

const Main = () => {
    const navigate = useNavigate();
const isLoggedIn = useSelector(state => state.isLoggedIn) 

   
    return (


    
        <main>
          <div className="y-wrap">
              {/* {`Logged in status: ${isLoggedIn.toString()}`} */}
              <Routes>
                 <Route path="/" element={<Welcome/>} />
                 <Route path='/Login' element={<Login/>} />
                 <Route path='/UserForm' element={<UserForm/>} />
                 <Route path='/EventSearch' element={<EventSearch/>} />
              </Routes>
          </div>
      
      
        </main>  
    ) 
};

export default Main;
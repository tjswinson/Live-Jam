import { Route, Routes, useNavigate } from 'react-router-dom';
import Welcome from "../welcome";
import Login from "../Login";

const Main = () => {
    const navigate = useNavigate();


    
    return (


    
        <main>
          <div className="y-wrap">
              <Routes>
                 <Route path="/" element={<Welcome/>} />
                 <Route path='/Login' element={<Login/>} />
                 
              </Routes>
          </div>
      
      
        </main>  
    ) 
};

export default Main;
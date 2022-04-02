import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from './redux/actions';
import {Footer, Header, Main} from './sectioning';

const App = () => {
  const dispatch = useDispatch()
useEffect (()=>{
 dispatch(setAuth())    
})

  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
    
  );
}

export default App;


import { useState } from 'react'
import './styles.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import EventSearch from './componenents/EventSearch';


function Login(props) 
{
  const navigateTo = useNavigate();
  const [credentials, setCredentials] = useState({
    username:'', password:''
  })

  const handleChange = (e) => {
  setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    navigateTo('/EventSearch');
      //perform login request

      axios.post('http://localhost:8080/login',{
        username: credentials.username,
        password: credentials.password
      }).then(response =>{
        if(response.data) {
          const token = response.data.token
          localStorage.setItem('jsonwebtoken', token)
         
          localStorage.setItem('username', credentials.username)
          //props.onLoggedIn()

        }
     // })
      //.then(response => {
        //console.log(response);
      })
      .catch(error =>{
        console.log(error)
      })
  }
  
  return (

     <>
      <div className="login-box">       
      <form onSubmit={handleLogin}>

<div className="login">
<input type="text" value={credentials.username} onChange={handleChange} name="username"  className="form-control" placeholder="Username" />
</div>
<div className="login">
<input type="password" value={credentials.password} onChange={handleChange} name="password" className="form-control" placeholder ="Password" />
</div>

<button  className="login-btn">Login</button>
</form>
</div> 
</>

  )  
    }
  

 
  export default Login;

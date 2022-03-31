import { useState } from 'react'
import './styles.css';
import axios from 'axios'

function Login(props) 
{
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
      //perform login request

      axios.post('http://localhost:8080/login',{
        username: credentials.username,
        password: credentials.password
      }).then(response =>{
        if(response.data) {
          const token = response.data.token
          localStorage.setItem('jsonwebtoken', token)
          //props.history.push('/customerInfo')
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
              
      <form onSubmit={handleLogin}>

<div className="login">
 <label>User Name</label>
<input type="text" value={credentials.username} onChange={handleChange} name="username"  className="form-control" placeholder="Enter user name" />
</div>
<div className="login">
<label>Password</label>
<input type="password" value={credentials.password} onChange={handleChange} name="password" className="form-control" placeholder ="Enter password" />
</div>

<button  className="login btn">Login</button>
</form>
</>

  )  
    }
  

 
  export default Login;

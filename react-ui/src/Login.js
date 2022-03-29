import { useState } from 'react'
import './styles.css'

function Login(props) {
  const [credentials, setCredentials] = useState({})

  const handleChange = (e) => {
  setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = () => {
      //perform login request
  }
  
  return (

     <>
              
      <form>

<div className="login">
 <label>User Name</label>
<input type="text" name="username" onChange={handleChange} className="form-control" placeholder="Enter user name" autoComplete="false"/>
</div>
<div className="login">
<label>Password</label>
<input type="password" name = "password" onChange={handleChange} className="form-control" placeholder = "Enter password" autoComplete="false"/>
</div>

<button type="submit" className="btn btn-primary btn-block">Login</button>
</form>
</>

  )  
    }
  

 
  export default Login;

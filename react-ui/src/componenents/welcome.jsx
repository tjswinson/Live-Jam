import React from "react";

const Welcome = () => {
    return (
      <>
        <h2>Welcome to Live Jam</h2>
        <p>The interactive concert tracker</p>
      
      <form>

<div className="login">
 <label>User Name</label>
<input type="text" name="username" className="form-control" placeholder="Enter user name" autoComplete="false"/>
</div>
<div className="login">
<label>Password</label>
<input type="password" name = "password" className="form-control" placeholder = "Enter password" autoComplete="false"/>
</div>

<button type="submit" className="btn btn-primary btn-block">Submit</button>
</form>
</>

    )
  }
  
    

  export default Welcome;
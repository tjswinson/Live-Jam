import {useState} from "react";

const UserForm = ({action}) => {

    const [user, setUser] = useState({});

    const handleChange = e => {
        const key = e.target.dataset.keyname;
        const value = e.target.value;
        const updatedUser = {...user};
        updatedUser[key] = value;
        setUser(updatedUser);
    }; 

        const handleSubmit = e => {
            e.preventDefault();
            action(user);
            setUser({});
            
        }

return (
    <form onSubmit={handleSubmit} >
    <div className="user-field">
      <label>
        <span>First name</span>
        <input onChange={handleChange} data-keyname="name" value={user.fname || ''} />
      </label>
    </div>
    <div className="user-field">
      <label>
        <span>Last name</span>
        <input onChange={handleChange} data-keyname="Last name" value={user.lname || ''} />
      </label>
    </div>
    <div className="user-field">
      <label>
        <span>Email</span>
        <input onChange={handleChange} data-keyname="email" value={user.email || ''} />
      </label>
            </div>
    <div className="user-field">
      <label>
        <span>Login</span>
        <input onChange={handleChange} data-keyname="login" value={user.city || ''} />
      </label>
    </div>
    <div className="user-field">
      <label>
        <span>Password</span>
        <input onChange={handleChange} data-keyname="password" value={user.password || ''} />
      </label>
    </div>
    
            <br></br>

            <button className="btn" type="submit">Register</button>
    </form>
);
};

export default UserForm;
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
        <span>Full name</span>
        <input onChange={handleChange} data-keyname="name" value={user.name || ''} />
      </label>
    </div>
    <div className="user-field">
      <label>
        <span>Address</span>
        <input onChange={handleChange} data-keyname="address" value={user.address || ''} />
      </label>
    </div>
    <div className="user-field">
      <label>
        <span>City</span>
        <input onChange={handleChange} data-keyname="city" value={user.city || ''} />
      </label>
    </div>
    <div className="user-field">
      <label>
        <span>State</span>
        <input onChange={handleChange} data-keyname="state" value={user.state || ''} />
      </label>
    </div>
    <div className="user-field">
      <label>
        <span>Zip Code</span>
        <input onChange={handleChange} data-keyname="zipcode" value={user.zipcode || ''} />
      </label>
    </div>
    
    <div className="user-field">
      <label>
        <span>Email</span>
        <input onChange={handleChange} data-keyname="email" value={user.email || ''} />
      </label>
            </div>

            <br></br>

            <button className="btn" type="submit">Submit</button>
    </form>
);
};

export default UserForm;
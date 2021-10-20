/*
 *   Copyright (c) 2021 Pravin Sawant
 *   All rights reserved.
 */
import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    website: ""
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container" style={{boxShadow: "0 0 10px red"}}>
      <div className="w-75 mx-auto shadow p-5" >
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <label for="Name<" class="control-label">Enter Your Name</label>
            <input
              type="text"
              id="Name<"
              className="form-control"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label for="Usern" class="control-label">Enter Your Username</label>
            <input
              type="text"
              id="Usern"
              className="form-control"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label for="E-mai" class="control-label">Enter Your E-mail Address</label>
r            <input
              type="email"
              id="E-mai"
              className="form-control"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label for="Phone" class="control-label">Enter Your Phone Number</label>
            <input
              type="text"
              id="Phone"
              className="form-control"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label for="Websi" class="control-label">Enter Your Website Name</label>
            <input
              type="text"
              id="Websi"
              className="form-control"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

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
<<<<<<< HEAD
        <form onSubmit={e => onSubmit(e)} style={{boxShadow: "inset 0 0 5px", padding: "15px"}}>
          <div className="form-group" style={{margin:"10px"}}>
=======
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <label for="Name<" class="control-label">Enter Your Name</label>
>>>>>>> eaf66a6ca2f7863283f5b53fcc0ef714672c77b7
            <input
              type="text"
              id="Name<"
              className="form-control"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
<<<<<<< HEAD
          <div className="form-group" style={{margin:"10px"}}>
=======
          <div className="form-group">
          <label for="Usern" class="control-label">Enter Your Username</label>
>>>>>>> eaf66a6ca2f7863283f5b53fcc0ef714672c77b7
            <input
              type="text"
              id="Usern"
              className="form-control"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
<<<<<<< HEAD
          <div className="form-group" style={{margin:"10px"}}>
=======
          <div className="form-group">
          <label for="E-mai" class="control-label">Enter Your E-mail Address</label>
>>>>>>> eaf66a6ca2f7863283f5b53fcc0ef714672c77b7
            <input
              type="email"
              id="E-mai"
              className="form-control"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
<<<<<<< HEAD
          <div className="form-group" style={{margin:"10px"}}>
=======
          <div className="form-group">
          <label for="Phone" class="control-label">Enter Your Phone Number</label>
>>>>>>> eaf66a6ca2f7863283f5b53fcc0ef714672c77b7
            <input
              type="text"
              id="Phone"
              className="form-control"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
<<<<<<< HEAD
          <div className="form-group" style={{margin:"10px"}}>
=======
          <div className="form-group">
          <label for="Websi" class="control-label">Enter Your Website Name</label>
>>>>>>> eaf66a6ca2f7863283f5b53fcc0ef714672c77b7
            <input
              type="text"
              id="Websi"
              className="form-control"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
<<<<<<< HEAD
          <center>
          <button className="btn btn-primary btn-block" style={{margin:"10px",width:"30vw"}}>Add User</button>
          </center>
=======
          <button className="btn btn-primary">Add User</button>
>>>>>>> eaf66a6ca2f7863283f5b53fcc0ef714672c77b7
        </form>
      </div>
    </div>
  );
};

export default AddUser;

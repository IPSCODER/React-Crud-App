/*
 *   Copyright (c) 2021 Pravin Sawant
 *   All rights reserved.
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  // const deleteUser = async (user_id) => {
  //   console.log(user_id);
  //   console.log(users);
  //   const index = users.indexOf(5);
  //   if (index > -1) {
  //     users.splice(index, 1);
  //   }
  //   console.log(users);
  // };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container" >
      <div className="py-4">
        <h1>Home Page</h1>
<<<<<<< HEAD
        <table class="table border " style={{boxShadow: "inset 0 0 10px grey"}}>
          <thead class="thead-dark" >
=======
        <table className="table border shadow">
          <thead className="thead-dark">
>>>>>>> eaf66a6ca2f7863283f5b53fcc0ef714672c77b7
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {/* View button */}
                  <Link className="btn btn-success" to={`/users/${user.id}`}>
                  <i className="fa fa-eye"></i>
                  </Link>&nbsp;
                  {/* Edit Button */}
                  <Link
                   className="btn btn-primary"
                    to={`/users/edit/${user.id}`}
                  >
                      <i className="fa fa-pencil"></i>
                  </Link>&nbsp;
                  {/* Delete button */}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                      <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

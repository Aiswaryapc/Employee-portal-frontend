import React from 'react';
import styles from "./AddEmployee.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from '../Nav/Navbar';
import { useNavigate } from "react-router-dom";


function AddEmployee(props) {
    const navigate = useNavigate();
    const [user, setUser] = useState({
      name: "",
      gender: "",
      age: "",
      designation:"",
      address: "",
      city: "",
      state: "",
      mobileNumber: "",
      email: "",
      password: "",
      supervisor: "",
      roles:[""]
    });
    const [cPass,setCPass]=useState("");
    function postUser(e) {
      e.preventDefault();
      console.log(user);
      axios
        .post("http://localhost:8093/api/auth/signup", user)
        .then((response) => {
          console.log(response.data);
          alert("Account created successfully!!!");
          navigate("/employee");
        })
        .catch((error) => {
          alert("Email already exists..Please sign in to continue.");
        });
    }
  
    return (
        <div>
            <div><NavBar/><div className={styles.display}>
      <div className="container p-0">
        <div class="container-fluid h-100">
          <div class="column d-flex justify-content-right align-items-right h-100">
            <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">
              <div className={"card shadow " + styles.cardSetup}>
                <div className={"card-header " + styles.headerCrd}>
                  <div className={"text-center " + styles.eheading}>Add New Employee</div>
                </div>

                <div
                  className={"card-body " + styles.cardBody}
                  data-bs-spy="scroll"
                  data-bs-target="#navbar-example"
                >
                  


                     



                  <form>
                  <div class="row">
                    <div class="col-md-4 mb-0">
                      <label className={styles.label}>
                        <div className="text-left mt-1 mb-1 pb-1">

                          Full Name
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            value={user.name}
                            onChange={(e) =>
                              setUser({ ...user, name: e.target.value })
                            }
                            className="sinput"
                          />
                        </div>
                      </label>
                      {/* <div className="error">{nameError}</div> */}
                    </div>
                    <div class="col-md-4 mb-0">
                      <label className={styles.label}>
                        <div className="text-left mt-1 mb-1 pb-1 ">

                          Role
                        </div>
                        <div className="form-outline mb-4  ">

                          <select className="sinput" value={user.roles}
                            onChange={(e) =>
                              setUser({ ...user, roles:[ e.target.value] })
                            }>
                            <option value="1">ROLE_USER</option>
                            <option value="2">ROLE_MANAGER</option>
                            <option value="3">ROLE_ADMIN</option>

                          </select>
                        </div>
                      </label>
                      
                      
                    </div>

                    <div class="col-md-4 mb-0">
                      <label className={styles.label}>
                        <div className="text-left mt-1 mb-1 pb-1">

                          Designation
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            value={user.designation}
                            onChange={(e) =>
                              setUser({ ...user, designation: e.target.value })
                            }
                            className="sinput"
                          />
                        </div>
                      </label>
                     
                    </div>




                    <div class="col-md-4 mb-0">
                      <label className={styles.label}>
                        <div className="text-left mt-1 mb-1 pb-1 ">

                          Gender
                        </div>
                        <div className="form-outline mb-4  ">

                          <select className="sinput" value={user.gender}
                            onChange={(e) =>
                              setUser({ ...user, gender: e.target.value })
                            }>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Others</option>

                          </select>
                        </div>
                      </label>
                      
                    </div>
                  
                  
                    <div class="col-md-4 mb-0">
                      <label className={styles.label}>
                        <div className="text-left mt-1 mb-1 pb-1">

                          Email
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            value={user.email}
                            onChange={(e) =>
                              setUser({ ...user, email: e.target.value })
                            }
                            className="sinput"
                          />
                        </div>
                      </label>
                     
                    </div>
               
                    <div class="col-md-4 mb-0">
                      <label className={styles.label}>
                        <div className="text-left mt-1 mb-1 pb-1 ">

                          Age
                        </div>
                        <div className="form-outline mb-4  ">

                          <input
                            type="text"
                            value={user.age}
                            onChange={(e) =>
                              setUser({ ...user, age: e.target.value })
                            }
                            className="sinput"
                          />
                        </div>
                      </label>
                      
                    </div>
                  
                 
                    <div class="col-md-4 mb-0">
                      <label className={styles.label}>
                        <div className="text-left mt-1 mb-1 pb-1">

                          Password
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            value={user.password}
                            onChange={(e) =>
                              setUser({ ...user, password: e.target.value })
                            }
                            className="sinput"
                          />
                        </div>
                      </label>
                     
                    </div>
                    <div class="col-md-4 mb-0">
                      <label className={styles.label}>
                        <div className="text-left mt-1 mb-1 pb-1 ">

                          Confirm Password
                        </div>
                        <div className="form-outline mb-4  ">

                          <input
                            type="password"
                            value={cPass}
                            onChange={(e) =>
                              setCPass(e.target.value)
                            }
                            className="sinput"
                          />
                        </div>
                      </label>
                      </div>
                    
                  
                    <div class="col-md-4 mb-0">
                      <label className={styles.label}>
                        <div className="text-left mt-1 mb-1 pb-1">

                          Mobile Number
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            value={user.mobileNumber}
                            onChange={(e) =>
                              setUser({ ...user, mobileNumber: e.target.value })
                            }
                            className="sinput"
                          />
                        </div>
                      </label>
                      
                    </div>
                    <div class="col-md-4 mb-0">
                      <label className={styles.label}>
                        <div className="text-left mt-1 mb-1 pb-1 ">

                          Supervisor
                        </div>
                        <div className="form-outline mb-4  ">

                          <input
                            type="text"
                            value={user.supervisor}
                            onChange={(e) =>
                              setUser({ ...user, supervisor: e.target.value })
                            }
                            className="sinput"
                          />
                        </div>
                      </label>
                      
                    
                  </div>
                 
                    <div class="col-md-4 mb-0">
                      <label className={styles.label}>
                        <div className="text-left mt-1 mb-1 pb-1">

                          Address
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            value={user.address}
                            onChange={(e) =>
                              setUser({ ...user, address: e.target.value })
                            }
                            className="sinput"
                          />
                        </div>
                      </label></div>
                     
                    
                    <div class="col-md-4 mb-0">
                      <label className={styles.label}>
                        <div className="text-left mt-1 mb-1 pb-1 ">

                          City
                        </div>
                        <div className="form-outline mb-4  ">

                          <input
                            type="text"
                            value={user.city}
                            onChange={(e) =>
                              setUser({ ...user, city: e.target.value })
                            }
                            className="sinput"
                          />
                        </div>
                      </label>
                     
                    </div>
                 
                 
                    <div class="col-md-4 mb-0">
                      <label className={styles.label}>
                        <div className="text-left mt-1 mb-1 pb-1">

                          State
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            value={user.state}
                            onChange={(e) =>
                              setUser({ ...user, state: e.target.value })
                            }
                            className="sinput"
                          />
                        </div>
                      </label>
                      
                    </div>

                      <button
                        className={styles.subtn}
                      onClick={(e) => {
                       postUser(e);
                      }}
                      >
                        +Add
                      </button>

                    </div>
                  
                </form>









                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
        </div>
    );
}

export default AddEmployee;
import "./signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import validator from "validator";

function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gender: "",
    age: "",
    address: "",
    city: "",
    state: "",
    mobileNumber: "",
    email: "",
    password: "",
    supervisor: "",
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
        navigate("/newsfeed");
      })
      .catch((error) => {
        alert("Email already exists..Please sign in to continue.");
        navigate("/")
      });
  }

  return (
    <div className="sbody">
      <div className="container py-4 ">
        <div className="row d-flex justify-content-left  align-items-left px-0 ">
          <div class="row d-flex justify-content-left">
            <div class="col-lg-7">
              <div className=" text-left mt-1 mb-1 pb-1">
                <h2 className="mt-1 mb-5 pb-1">
                  <p className="swelcome">Create New Account</p>
                </h2>
                <form>
                  <div class="row">
                    <div class="col-md-5 mb-0">
                      <label className="label">
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
                    <div class="col-md-6 mb-0">
                      <label className="slabel">
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
                  </div>
                  <div class="row">
                    <div class="col-md-5 mb-0">
                      <label className="label">
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
                    <div class="col-md-6 mb-0">
                      <label className="slabel">
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
                  </div>
                  <div class="row">
                    <div class="col-md-5 mb-0">
                      <label className="label">
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
                    <div class="col-md-6 mb-0">
                      <label className="slabel">
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
                  </div>
                  <div class="row">
                    <div class="col-md-5 mb-0">
                      <label className="label">
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
                    <div class="col-md-6 mb-0">
                      <label className="slabel">
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
                  </div>
                  <div class="row">
                    <div class="col-md-5 mb-0">
                      <label className="label">
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
                      </label>
                     
                    </div>
                    <div class="col-md-6 mb-0">
                      <label className="slabel">
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
                  </div>
                  <div class="row">
                    <div class="col-md-5 mb-0">
                      <label className="label">
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
                    <div class="col-md-6 mb-0">


                      <button
                        className="subtn"
                      onClick={(e) => {
                       postUser(e);
                      }}
                      >
                        SignUp
                      </button>

                    </div>
                  </div>
                </form>
                <h5 className="linktext">
                  Already has an account?
                  <Link to="/" className="link">Login</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
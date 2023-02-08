import React from 'react';
import styles from "./Employee.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import NavBar from '../Nav/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import ReactLoading from "react-loading";

function Employee(props) {
  const navigate = useNavigate();
  const [emp, setEmp] = useState([]);
  const [pEid, setPEid] = useState([]);
  const [pName, setPName] = useState([]);
  const [empMail, setEmpMail] = useState([]);
  const [project1, setProject1] = useState({
    project: ""
  });
  const [announcement, setAnnouncement] = useState({
    msgBody: "",
    subject: "",
  });
  const [mail, setMail] = useState({
    recipient: "",
    msgBody: "You are added to a new Project. Please check",
    subject: "New Project",

  });
  const Loader = () => <div>Loading...</div>;
 const hideLoader = () => {
    setState({ loading: false });
  }

  const showLoader = () => {
   setState({ loading: true });
  }
  const [state, setState] = React.useState(false);
  const [aOpen, setAOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showMButton, setShowMButton] = useState(false);
  let role = "";
  let token = "";
  useEffect(() => {
    token = localStorage.getItem("token")
    role = localStorage.getItem("role")
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };



    axios.get(
      'http://localhost:8093/api/test/employees',

      config
    ).then((response) => {
      setEmp(response.data);
    });
    axios.get(
      'http://localhost:8093/api/test/projects',

      config
    ).then((response) => {
      setPName(response.data);
    });


    if (role === "ROLE_ADMIN") {
      setShowButton(true)
    } else {

      setShowButton(false)
    }
    if (role === "ROLE_MANAGER") {
      setShowMButton(true)
    } else {

      setShowMButton(false)
    }


  }, []);
  function getEmail(e) {
    axios.get(
      `http://localhost:8093/api/test/emp/${pEid}`,
    ).then((response) => {
      setEmpMail(response.data.email);
    });
  }
  function sendMail(e) {
    getEmail(e)
    e.preventDefault();
    
    setMail({
      recipient: empMail,
      msgBody: "You are added to a new Project. Please check",
      subject: "New Project",
    })
    {showLoader()};
    console.log(mail)
    axios
      .post(`http://localhost:8093/api/test/sendMail`, mail)
      .then((response) => {
        console.log(response.data);
        {hideLoader()}
        alert("Email sent successfully!!!");

      })
      .catch((error) => {
        {hideLoader()}
        alert("Something went wrong.");
      });
  }

  function postAnnouncement(e) {
    e.preventDefault();
    console.log(announcement)
    {showLoader()};
    axios
      .post(`http://localhost:8093/api/test/sendMailToAll`, announcement)
      .then((response) => {
        {hideLoader()}
        console.log(response.data);
        alert("Announcement sent to all employees successfully!!!");
      })
      .catch((error) => {
        {hideLoader()}
        alert("Something went wrong.");
      });
  }
  function postProject(e) {
    e.preventDefault();
    console.log(project1)

    axios
      .post(`http://localhost:8093/api/test/emp/update/${pEid}`, project1)
      .then((response) => {
        console.log(response.data);
        alert("Employee Added to project successfully!!!");
        sendMail(e)
      })
      .catch((error) => {
        alert("Something went wrong.");
      });
  }
  console.log(pName)
  const handleClose = () => {
    setOpen(false);
  };
  const ahandleClose = () => {
    setAOpen(false);
  };

  const [searchEmployee, setSearchEmployee] = useState("");


  return (
    <div>
      <NavBar />
      <div className={styles.display}>
        <div className="container p-0">
          <div class="container-fluid h-100">
            <div class="column d-flex justify-content-right align-items-right h-100">
              <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">
                <div className={"card shadow " + styles.cardSetup}>
                  <div className={"card-header " + styles.headerCrd}>
                    <div className={"text-center " + styles.eheading}>
                      <p className='headingEmployee'> Employees </p>
                      <input
                        className="search1"
                        type="text"
                        placeholder="Search..."
                        onChange={(event) => {
                          setSearchEmployee(event.target.value);
                        }}
                      />

                    </div>

                    {showButton &&
                      <Dropdown>
                        <Dropdown.Toggle className={styles.btnbg} >
                          More Options
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#" onClick={(e) => { navigate("/addEmployee") }} >
                            Add Employee
                          </Dropdown.Item>
                          <Dropdown.Item href="#" onClick={() => {
                            setOpen(true);
                          }}>
                            Assign Project
                          </Dropdown.Item>
                          <Dropdown.Item href="#" onClick={() => {
                            setAOpen(true);
                          }}>
                            Send Announcement
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>}
                      
                    {showMButton &&
                      <Dropdown>
                        <Dropdown.Toggle className={styles.btnbg} >
                          More Options
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#" onClick={() => {
                            setOpen(true);
                          }}>
                            Assign Project
                          </Dropdown.Item>
                          
                        </Dropdown.Menu>
                      </Dropdown>}
                  </div>
                  <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                  >
                    <div style={{ outline: 'none' }} className={styles.model}>
                      <div className={styles.displaymodel}>
                        <div className="container p-0">
                          <div class="container-fluid h-100">
                            <div class="column d-flex justify-content-center align-items-center h-100">
                              <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">
                                <div className={"card shadow " + styles.cardSetup}>
                                  <div className={"card-header " + styles.headerCrd}>
                                    <div className={"text-center " + styles.eheading}>Assign Project
                                      <button
                                        id="button"
                                        onClick={(e) => setOpen(false)}
                                        className={styles.subtn}

                                      >
                                        X
                                      </button></div>
                                  </div>


                                  <div
                                    className={"card-body " + styles.cardBody}
                                    data-bs-spy="scroll"
                                    data-bs-target="#navbar-example"
                                  >
                                    <label className={styles.label}>
                                      <div className="text-left mt-1 mb-1 pb-1 ">

                                        Project Name
                                      </div>
                                      <div className="form-outline mb-4  ">

                                        <select className="sinput"
                                          value={project1.project}
                                          onChange={(e) =>
                                            setProject1({ ...project1, project: e.target.value })
                                          }
                                        >
                                          {pName.map((item, index) => (
                                            <option value={item.projName}>{item.projName}</option>))}


                                        </select>
                                      </div>
                                    </label>

                                    <label className={styles.label}>
                                      <div className="text-left mt-1 mb-1 pb-1 ">

                                        Employee
                                      </div>
                                      <div className="form-outline mb-4  ">

                                        <select className="sinput"
                                          value={pEid}
                                          onChange={(e) =>
                                            setPEid(e.target.value)
                                          }
                                        >
                                          {emp.map((item, index) => (
                                            <option value={item.empID}>Id:{' '}{item.empID}{' '}{' '}Name:{' '}{item.name}</option>))}


                                        </select>
                                      </div>
                                    </label>




                                    <button
                                      id="button"
                                      onClick={(e) => {postProject(e);
                                      }}
                                      className={styles.subtn1}

                                    >
                                      {(state.loading) ? <ReactLoading type="bars" className={styles.loader1} /> : "Add Employee"}
                                    </button>




                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </Modal>
                  <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={aOpen}
                    onClose={ahandleClose}
                  >
                    <div style={{ outline: 'none' }} className={styles.model}>
                      <div className={styles.displaymodel}>
                        <div className="container p-0">
                          <div class="container-fluid h-100">
                            <div class="column d-flex justify-content-center align-items-center h-100">
                              <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">
                                <div className={"card shadow " + styles.cardSetup}>
                                  <div className={"card-header " + styles.headerCrd}>
                                    <div className={"text-center " + styles.eheading}>Announcement
                                      <button
                                        id="button"
                                        onClick={(e) => setAOpen(false)}
                                        className={styles.subtn}

                                      >
                                        X
                                      </button></div>
                                  </div>


                                  <div
                                    className={"card-body " + styles.cardBody}
                                    data-bs-spy="scroll"
                                    data-bs-target="#navbar-example"
                                  >
                                    <div className='row'>
                                      <label className={styles.label}>
                                        <div className="text-left mt-1 mb-1 pb-1">

                                          Subject
                                        </div>
                                        <div className="form-outline mb-4">
                                          <input className={styles.textArea}
                                            type="text"
                                            value={announcement.subject}
                                            onChange={(e) =>
                                              setAnnouncement({ ...announcement, subject: e.target.value })
                                            }

                                          />
                                        </div>
                                      </label>
                                      <label className={styles.label}>
                                        <div className="text-left mt-1 mb-1 pb-1">

                                          Message
                                        </div>
                                        <div className="form-outline mb-4">
                                          <textarea className={styles.textArea} id="textAreaExample" rows="3" value={announcement.msgBody}
                                            onChange={(e) =>
                                              setAnnouncement({ ...announcement, msgBody: e.target.value })
                                            }></textarea>
                                        </div>
                                      </label>



                                    </div>


                                    <button
                                      id="button"
                                      onClick={(e) => postAnnouncement(e)}
                                      className={styles.subtn1}

                                    >{(state.loading) ? <ReactLoading type="bars" className={styles.loader1} /> : "Send"}
                                      
                                    </button>




                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </Modal>



                  <div
                    className={"card-body " + styles.cardBody}
                    data-bs-spy="scroll"
                    data-bs-target="#navbar-example"
                  >
                    {emp.filter((item) => {
                      if (searchEmployee == "") {
                        return item;
                      } else if ((item.name.toLowerCase().includes(searchEmployee.toLowerCase()))) {
                        return item;

                      }
                    }).map((item, index) => {
                      return (

                        <Accordion >
                          <Accordion.Item eventKey="0" color='#e2d7dd'>

                            <Accordion.Header className={styles.ncrdSetup} >
                              <div className={"col-md-11"}>
                                <div className={"d-flex mx-auto"}>

                                  <div class="form-outline w-100">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#692038" class="bi bi-person-circle" viewBox=" 0 0 16 16">
                                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                      <path fill-rule="#692038" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                    <span className={styles.itemName}>
                                      {item?.name}
                                    </span>
                                    {item?.roles?.map((item1, index1) => {
                                      return (
                                        <span className={styles.ptext123}> {item1?.name}</span>
                                      )
                                    })}

                                  </div>
                                </div>
                              </div>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="col">
                                <div className="row p-3" key={index}>
                                  <div className="col-md-8 d-flex">

                                  </div>
                                </div>

                                <div className="row p-3" key={index}>

                                  <img src={`http://localhost:8093/api/test/employee/profile-image/${item?.empID}`}  style={{width:"20%",height:"20%",marginLeft:"2%",marginBottom:"2%"}} alt="😢" />

                                  <div className={styles.itemName1}>
                                  <span className={styles.ptext2}>  Employee Id  </span> <span className={styles.ptext3}> :</span>  <span className={styles.ptext1}> {item?.empID}</span>
                                  </div>
                                  <div className={styles.itemName1}>
                                  <span className={styles.ptext2}>   Name </span> <span className={styles.ptext3}> : </span> <span className={styles.ptext1}> {item?.name}</span>
                                  </div>
                                  <div className={styles.itemName1}>
                                  <span className={styles.ptext2}>  Designation </span><span className={styles.ptext3}> : </span> <span className={styles.ptext1}> {item?.designation}</span>
                                  </div>
                                  <div className={styles.itemName1}>
                                  <span className={styles.ptext2}> Role</span> <span className={styles.ptext3}> : </span>  {item?.roles?.map((item1, index1) => {
                                      return (
                                        <span className={styles.ptext1}> {item1?.name}</span>
                                      )
                                    })}
                                  </div>
                                  <div className={styles.itemName1}>
                                  <span className={styles.ptext2}>  Age  </span><span className={styles.ptext3}>         :</span>  <span className={styles.ptext1}> {item?.age}</span>
                                  </div>
                                  <div className={styles.itemName1}>
                                  <span className={styles.ptext2}>  Gender </span>  <span className={styles.ptext3}>      :</span>  <span className={styles.ptext1}> {item?.gender}</span>
                                  </div>
                                  <div className={styles.itemName1}>
                                  <span className={styles.ptext2}>  Supervisor </span> <span className={styles.ptext3}>   : </span> <span className={styles.ptext1}> {item?.supervisor}</span>
                                  </div>
                                  <div className={styles.itemName1}>
                                  <span className={styles.ptext2}> Email </span>  <span className={styles.ptext3}>       : </span> <span className={styles.ptext1}> {item?.email}</span>
                                  </div>
                                  <div className={styles.itemName1}>
                                  <span className={styles.ptext2}>  Mobile Number</span><span className={styles.ptext3}>  :</span>  <span className={styles.ptext1}> {item?.mobileNumber}</span>
                                  </div>
                                  <div className={styles.itemName1}>
                                  <span className={styles.ptext2}>   Address </span>  <span className={styles.ptext3}>     : </span> <span className={styles.ptext1}> {item?.address}</span>
                                  </div>
                                  <div className={styles.itemName1}>
                                  <span className={styles.ptext2}> City </span>   <span className={styles.ptext3}>       : </span> <span className={styles.ptext1}> {item?.city}</span>
                                  </div>
                                  <div className={styles.itemName1}>
                                  <span className={styles.ptext2}> State  </span>   <span className={styles.ptext3}>     : </span> <span className={styles.ptext1}> {item?.state}</span>
                                  </div>

                                </div>


                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>

                      )
                    })}


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

export default Employee;
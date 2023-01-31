import React from 'react';
import NavBar from '../Nav/Navbar';
import styles from "./Documents.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import Modal from '@material-ui/core/Modal';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
function Documents(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [emp, setEmp] = useState();
    const [admin, setAdmin] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [dEid, setDEid] = useState([]);
    const [title, setTitle] = useState([]);
    const [pTitle, setPTitle] = useState([]);
    const [state, setState] = useState({ file: "" });
    let role = "";
    let empId = "";
    useEffect(() => {
        role = localStorage.getItem("role")
        empId = localStorage.getItem("empId")

        axios.get(`http://localhost:8093/api/test/emp/${empId}`).then((response) => {
            setEmp(response.data);
            setIsLoading(true);


        });
        if (role === "ROLE_ADMIN") {
            setAdmin(true)
          } else {
      
            setAdmin(false)
          }
      

    }, []);
    const handleClose = () => {
        setOpen(false);
      };
      function handleFile(e) {
        let file = e.target.files[0]
        setState({ ...state, file: file })

    }
      function post(e) {
        
        let file = state.file;
        console.log(file);
        let formdata = new FormData();
        formdata.append('empId', dEid);
        formdata.append('file', file);
        console.log(formdata);
        axios({
            url: `http://localhost:8093/api/test/${pTitle}`,
            method: "POST",
            data: formdata
        }).then((response) => {
            alert("Success");
           
        })
    }


    if (isLoading) {
        console.log(emp)
        if(admin){
            return(
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
                                           Upload User Documents

                                        </div>
                                    </div>

                                    <div
                                        className={"card-body " + styles.cardBody}
                                        data-bs-spy="scroll"
                                        data-bs-target="#navbar-example" >

                                        <div class="row">
                                            <a style={{textDecoration: 'none'}} className={styles.anbutn}  onClick={() => {setTitle("Upload SalarySlip");
                                            setPTitle("uploadSalarySlip");
                            setOpen(true);
                          }}>

                                               Upload SalarySlip</a>
                                            <a style={{textDecoration: 'none'}} className={styles.anbutn}  onClick={() => {
                                                setTitle("Upload Appointment Letter");
                                             setPTitle("uploadAppointmentLetter");
                                                setOpen(true);
                        
                          }}>

                                               Upload Appointment Letter</a>
                                            <a style={{textDecoration: 'none'}} className={styles.anbutn}  onClick={() => {setTitle("Upload Increment Letter");
                                             setPTitle("uploadIncrementLetter");
                            setOpen(true);
                            
                          }}>

                                               Upload Increment Letter</a>
                                            <a style={{textDecoration: 'none'}} className={styles.anbutn}  onClick={() => {setTitle("Upload Joining Letter");
                                             setPTitle("uploadJoiningLetter");
                            setOpen(true);
                         
                          }}>

                                              Upload Joining Letter</a>

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
                                    <div className={"text-center " + styles.meheading}>{title}</div>
                                  </div>


                                  <div
                                    className={"card-body " + styles.cardBody}
                                    data-bs-spy="scroll"
                                    data-bs-target="#navbar-example"
                                  >
                                    

                                    <div>
                                      <label className={styles.label}>
                                        <div className="text-left mt-1 mb-1 pb-1">

                                          Employee Id
                                        </div>
                                        <div className="form-outline mb-4">
                                          <input
                                            type="text"
                                            value={dEid}
                                            onChange={(e) =>
                                              setDEid(e.target.value)
                                            }
                                            className="sinput"
                                          />
                                        </div>
                                      </label></div><div className={styles.label}>
                                      <input type="file" onChange={(e) =>
                                                        handleFile(e)
                                                    } /></div>

                                      <button
                                      id="button"
                                      onClick={(e) => {post(e);handleFile(e)}}
                                      className={styles.subtn1}

                                    >
                                     Confirm
                                    </button>


                                    <button
                                      id="button"
                                      onClick={(e) => setOpen(false)}
                                      className={styles.subtn}

                                    >
                                      Close
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
        if(!admin){
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
                                            Documents

                                        </div>
                                    </div>

                                    <div
                                        className={"card-body " + styles.cardBody}
                                        data-bs-spy="scroll"
                                        data-bs-target="#navbar-example" >

                                        <div class="row">
                                            <a href={`http://localhost:8093/api/test/downloadSalarySlip/${emp.empID}`} style={{textDecoration: 'none'}} className={styles.nbutn}>

                                                SalarySlip</a>
                                            <a href={`http://localhost:8093/api/test/downloadAppointmentLetter/${emp.empID}`} style={{textDecoration: 'none'}} className={styles.nbutn}>

                                                Appointment Letter</a>
                                            <a href={`http://localhost:8093/api/test/downloadIncrementLetter/${emp.empID}`} style={{textDecoration: 'none'}} className={styles.nbutn}>

                                                Increment Letter</a>
                                            <a href={`http://localhost:8093/api/test/downloadJoiningLetter/${emp.empID}`} style={{textDecoration: 'none'}} className={styles.nbutn}>

                                                Joining Letter</a>

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
    }}
}

export default Documents;
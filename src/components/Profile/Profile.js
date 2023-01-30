import React from 'react';
import NavBar from '../Nav/Navbar';
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Profile.module.css";

import Sidebar from '../Nav/SideBar';

function Profile(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [emp, setEmp] = useState();
    const [state, setState] = useState({ file: "" });
    let empId = "";
    useEffect(() => {
        empId = localStorage.getItem("empId")

        axios.get(`http://localhost:8093/api/test/emp/${empId}`).then((response) => {
            setEmp(response.data);
            setIsLoading(true);


        });


    }, []);


    function handleFile(e) {
        let file = e.target.files[0]
        setState({ ...state, file: file })

    }

    function pic(e) {
        console.log(emp.empID);
        let file = state.file;
        console.log(file);
        let formdata = new FormData();
        formdata.append('userId', emp.empID);
        formdata.append('file', file);
        console.log(formdata);
        axios({
            url: 'http://localhost:8093/api/test/employee/profile-image/add',
            method: "POST",
            data: formdata
        }).then((response) => {
            alert("Profile picture updated");
            window.location.reload(true);
        })
    }
    if (isLoading) {


        return (
            <div>
                {/* <Sidebar/> */}
                <NavBar />
                <div className={styles.display}>
                    <div className="container p-0">
                        <div class="container-fluid h-100">
                            <div class="column d-flex justify-content-center align-items-center h-100">
                                <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">
                                    <div className={"card shadow " + styles.cardSetup}>
                                        <div className={"card-header " + styles.headerCrd}>
                                            <div className={"text-center " + styles.eheading}>Profile</div>
                                        </div>

                                        <div
                                            className={"card-body " + styles.cardBody}
                                            data-bs-spy="scroll"
                                            data-bs-target="#navbar-example"
                                        >



                                            <div className={styles.profile}>



                                                <img src={`http://localhost:8093/api/test/employee/profile-image/${emp.empID}`} className={styles.img} alt="..." />

                                                <div className="card-body mb-1">
                                                    <button className={styles.subtn2} onClick={(e) => {
                                                        pic(e);
                                                        handleFile(e)
                                                    }}>Upload Photo</button>
                                                    <input type="file" onChange={(e) =>
                                                        handleFile(e)
                                                    } />
                                                    <div className={styles.name}>{emp.name}</div>
                                                    <div className={styles.name}>{emp.designation}</div>

                                                    <hr />

                                                    <div className={styles.id}>Employee ID</div>
                                                    <div className={styles.colon}>:</div>
                                                    <div className={styles.eid}>{emp.empID}</div>

                                                    <div className={styles.id}>Gender</div>
                                                    <div className={styles.colon}>:</div>
                                                    <div className={styles.eid}>{emp.gender}</div>



                                                    <div className={styles.id}>Email ID</div>
                                                    <div className={styles.colon}>:</div>
                                                    <div className={styles.eid}>{emp.email}</div>

                                                    <div className={styles.id}>Mobile Number</div>
                                                    <div className={styles.colon}>:</div>
                                                    <div className={styles.eid}>{emp.mobileNumber}</div>

                                                    <div className={styles.id}>Supervisor</div>
                                                    <div className={styles.colon}>:</div>
                                                    <div className={styles.eid}>{emp.supervisor}</div>

                                                    <div className={styles.id}>Age</div>
                                                    <div className={styles.colon}>:</div>
                                                    <div className={styles.eid}>{emp.age}</div>

                                                    <div className={styles.id}>Address</div>
                                                    <div className={styles.colon}>:</div>
                                                    <div className={styles.eid}>{emp.address}</div>

                                                    <div className={styles.id}>City</div>
                                                    <div className={styles.colon}>:</div>
                                                    <div className={styles.eid}>{emp.city}</div>

                                                    <div className={styles.id}>State</div>
                                                    <div className={styles.colon}>:</div>
                                                    <div className={styles.eid}>{emp.state}</div>

                                                </div>


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
}

export default Profile;
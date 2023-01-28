import React from 'react';
import NavBar from '../Nav/Navbar';
import styles from "./Documents.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
function Documents(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [emp, setEmp] = useState();
    
    let empId = "";
    useEffect(() => {
        empId = localStorage.getItem("empId")

        axios.get(`http://localhost:8093/api/test/emp/${empId}`).then((response) => {
            setEmp(response.data);
            setIsLoading(true);


        });


    }, []);
    if (isLoading) {
        console.log(emp)
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
    }
}

export default Documents;
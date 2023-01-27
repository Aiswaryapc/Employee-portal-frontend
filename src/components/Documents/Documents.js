import React from 'react';
import NavBar from '../Nav/Navbar';
import styles from "./Documents.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';

function Documents(props) {


    const [isLoading, setIsLoading] = useState(true);
    const [viewPdf, setViewPdf] = useState(false);
    const closePdf = () => setViewPdf(false);
    const openPdf = () => setViewPdf(true);
    const [document, setDocument] = useState(null);

    const [emp, setEmp] = useState();
    let empId = "";
    useEffect(() => {
        empId = localStorage.getItem("empId")

        axios.get(`http://localhost:8093/api/test/emp/${empId}`).then((response) => {
            setEmp(response.data);
            setIsLoading(true);


        });
        axios.get(`http://localhost:8093/api/test/downloadAppointmentLetter/${empId}`)
            .then((response) => {
                setDocument(response.data);
                setIsLoading(true);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }, [])
    if (isLoading) {
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

                                                <button style={{ marginLeft: "auto" }} onClick={(e) => {
                                                    openPdf();
                                                    setDocument("downloadSalarySlip");
                                                }} className={styles.nbutn}>Salary Slip</button>



                                                <button style={{ marginLeft: "auto" }} onClick={(e) => {
                                                    openPdf();
                                                    setDocument("downloadAppointmentLetter");


                                                }} className={styles.nbutn}>Appointment Letter</button>


                                                <button style={{ marginLeft: "auto" }} onClick={(e) => {
                                                    openPdf();
                                                    setDocument("downloadIncrementLetter");


                                                }} className={styles.nbutn}>Increment Letter</button>


                                                <button style={{ marginLeft: "auto" }} onClick={(e) => {
                                                    openPdf();
                                                    setDocument("downloadJoiningLetter");
                                                }} className={styles.nbutn}>Joining Letter</button>

                                            </div>
                                            <Modal
                                                show={viewPdf}
                                                size='lg'
                                                fullscreen={'below lg'}
                                            >
                                                <Modal.Header closeButton onClick={closePdf}>
                                                    {/* <Modal.Title>{document['fileName']}</Modal.Title> */}
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <iframe
                                                        src={`http://localhost:8093/api/test/${document}/${emp.empID}`}
                                                        // title={document['fileName']}
                                                        width='765rem'
                                                        height='500rem'
                                                    />
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant='secondary' onClick={closePdf}>Close</Button>
                                                </Modal.Footer>
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
}

export default Documents;
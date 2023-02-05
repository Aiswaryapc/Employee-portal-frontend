
import React, { Component } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Project.module.css";
import Accordion from "react-bootstrap/Accordion";
import NavBar from '../Nav/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { Link, useNavigate } from "react-router-dom";




function Project(props) {

    const [project, setProject] = useState([]);

    const [showButton, setShowButton] = useState(false);
    let role = "";
    let token = "";
    const navigate = useNavigate();
    useEffect(() => {
        role = localStorage.getItem("role")
        token = localStorage.getItem("token")

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const bodyParameters = {
            key: "value"
        };

        axios.get(
            'http://localhost:8093/api/test/projects',
            bodyParameters,
            config
        ).then((response) => {
            setProject(response.data);
        });

        if ((role === "ROLE_ADMIN") || (role === "ROLE_MANAGER")) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }

    }, []);




    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [modalData, setModalData] = useState(null);

    return (
        <>
            <NavBar />
            <div className={styles.display}>

                <div className="container p-0">



                    <div class="container-fluid h-100">
                        <div class="column d-flex justify-content-right align-items-right h-100">
                            <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">


                                <h2 className="mt-1 mb-5 pb-1">
                                    <p className={styles.pmheading}>Projects</p>
                                </h2>
                                <div style={{ display: "flex" }}>

                                    {showButton && <button style={{ marginLeft: "auto" }} onClick={(e) => {
                                        navigate("/addProject");
                                    }} className={styles.nbutn}>Add New Project</button>}


                                </div>
                                <div className="row">
                                    {project.map((item, index) => {
                                        return (
                                            <div className={"col-12 col-md-4 pb-5 pt-3"} key={index}>
                                                <div className={styles.zoom}>
                                                    <div className={"card m-4 p-1 shadow-sm " + styles.pcrdSetup}>

                                                        <div className="row g-0">

                                                            <div
                                                                className="col-md-4"

                                                                style={{
                                                                    backgroundImage: `url(${item?.flowChart})`,
                                                                    backgroundRepeat: "no-repeat",
                                                                    backgroundSize: "cover",

                                                                }} onClick={() => {
                                                                    setOpen(true);

                                                                    setModalData(item);
                                                                }}
                                                            ></div>
                                                            <Modal aria-labelledby="simple-modal-title"
                                                                aria-describedby="simple-modal-description"
                                                                open={open}
                                                                onClose={handleClose}
                                                            >
                                                                <div style={{ outline: 'none' }} className={styles.model}>
                                                                    <div className={styles.display1}>
                                                                        <div className="container p-0">
                                                                            <div class="container-fluid h-100">
                                                                                <div class="column d-flex justify-content-center align-items-center h-100">
                                                                                    <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">
                                                                                        <div className={"card shadow " + styles.cardSetup}>
                                                                                            <div className={"card-header " + styles.headerCrd}>
                                                                                                <div className={"text-center " + styles.eheading}>Flowchart
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
                                                                                                <img src={modalData?.flowChart} className={styles.photo}></img>






                                                                                            </div>

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </Modal>

                                                            <div className="col-md-8" style={{ padding: "2%" }}>
                                                                <div className="card-body">
                                                                    <h5 className="card-title"><div className={styles.pheading}>{item.projName}</div> </h5>
                                                                    {/* <p className="card-text">Vaccancies: <span className={styles.ptext}>{item.jobopportunities}</span> </p> */}
                                                                    <p className="card-text">Owner:  <span className={styles.ptext}>{item.owner}</span> </p>
                                                                    <p className="card-text">

                                                                    </p>



                                                                </div>
                                                            </div>


                                                            <Accordion>
                                                                <Accordion.Item eventKey="0">
                                                                    <Accordion.Header>
                                                                        <div className={"col-md-11"}>
                                                                            <div className={"d-flex mx-auto"}>

                                                                                <div class="form-outline w-100">

                                                                                    <h6>Employees</h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className="col">
                                                                            <div className="row p-0" key={index}>
                                                                                <div className="col-md-8 d-flex">

                                                                                </div>
                                                                            </div>
                                                                            {item?.employee?.map((item1, index1) => {
                                                                                return (
                                                                                    <div className="row p-0" key={index1}>

                                                                                        <div className={styles.itemDes}>
                                                                                            Name: <span className={styles.ptext1}>  {item1?.name}</span>

                                                                                            {item1?.roles?.map((item2, index2) => {
                                                                                                return (
                                                                                                    <div className={styles.itemName}>
                                                                                                        Role:  <span className={styles.ptext1}> {item2?.name}</span>
                                                                                                    </div>)
                                                                                            })}</div>


                                                                                    </div>

                                                                                );
                                                                            })}
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            </Accordion>
                                                            <Accordion>
                                                                <Accordion.Item eventKey="0">
                                                                    <Accordion.Header>
                                                                        <div className={"col-md-11"}>
                                                                            <div className={"d-flex mx-auto"}>

                                                                                <div class="form-outline w-100">

                                                                                    <h6>Stakeholders</h6>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className="col">
                                                                            <div className="row p-0" key={index}>
                                                                                <div className="col-md-8 d-flex">

                                                                                </div>
                                                                            </div>
                                                                            {item?.stakeholder?.map((item1, index1) => {
                                                                                return (
                                                                                    <div className="row p-0" key={index1}>

                                                                                        <div className={styles.itemDes}>
                                                                                            Name:  <span className={styles.ptext1}> {item1?.name}</span>

                                                                                            <div className={styles.itemName}>
                                                                                                Position: <span className={styles.ptext1}>  {item1?.position}</span>
                                                                                            </div></div>


                                                                                    </div>

                                                                                );
                                                                            })}
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            </Accordion>


                                                        </div>
                                                    </div>

                                                </div>





                                            </div>


                                        );
                                    })}

                                </div>
                            </div>
                        </div>



                    </div>
                </div>




            </div>
        </>

    );
}

export default Project;

import React, { Component } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Project.module.css";
import Accordion from "react-bootstrap/Accordion";
function Project(props) {

    const [project, setProject] = useState([]);
    useEffect(() => {


        axios.get(`http://localhost:8093/api/test/projects`).then((response) => {
            setProject(response.data);
        });


    }, []);
    
    return (
        <div>
            <div className="container p-0">



                <div class="container-fluid h-100">
                    <div class="column d-flex justify-content-right align-items-right h-100">
                        <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">


                            <h2 className="mt-1 mb-5 pb-1">
                                <p className="news">Projects</p>
                            </h2>
                            <div className="row">
                                {project.map((item, index) => {
                                    return (
                                        <div className={"col-12 col-md-4 pb-5 pt-3"} key={index}>

                                            <div className={"card m-4 p-1 shadow-sm " + styles.crdSetup}>

                                                <div className="row g-0">
                                                    <div
                                                        className="col-md-4"
                                                        style={{
                                                            backgroundImage: `url(${item?.flowChart})`,
                                                            backgroundRepeat: "no-repeat",
                                                            backgroundSize: "cover",
                                                        }}
                                                    >

                                                    </div>
                                                    <div className="col-md-8" style={{ padding: "2%" }}>
                                                        <div className="card-body">
                                                            <h5 className="card-title">{item.projName}</h5>
                                                            <p className="card-text">Vaccancies:  {item.jobopportunities}</p>
                                                            <p className="card-text">Owner:   {item.owner}</p>
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
                                                                    <div className="row p-3" key={index}>
                                                                        <div className="col-md-8 d-flex">

                                                                        </div>
                                                                    </div>
                                                                    {item?.employee?.map((item1, index1) => {
                                                                        return (
                                                                            <div className="row p-3" key={index1}>

                                                                                <div className={styles.itemDes}>
                                                                                    Name:   {item1?.name}
                                                                                </div>
                                                                                <div className={styles.itemName}>
                                                                                    Role:   {item1?.roles?.name}
                                                                                </div>


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
                                                                    <div className="row p-3" key={index}>
                                                                        <div className="col-md-8 d-flex">

                                                                        </div>
                                                                    </div>
                                                                    {item?.stakeholder?.map((item1, index1) => {
                                                                        return (
                                                                            <div className="row p-3" key={index1}>

                                                                                <div className={styles.itemDes}>
                                                                                    Name:   {item1?.name}
                                                                                </div>
                                                                                <div className={styles.itemName}>
                                                                                    Position:   {item1?.position}
                                                                                </div>


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


                                    );
                                })}

                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>


    );
}

export default Project;
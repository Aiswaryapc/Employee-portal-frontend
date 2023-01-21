import React from 'react';
import styles from "./Employee.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
function Employee(props) {

  const [emp, setEmp] = useState([]);

  useEffect(() => {


    axios.get(`http://localhost:8093/api/test/employees`).then((response) => {
      setEmp(response.data);

    });


  }, []);




  return (
    <div><div className={styles.display}>
      <div className="container p-0">
        <div class="container-fluid h-100">
          <div class="column d-flex justify-content-right align-items-right h-100">
            <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">
              <div className={"card shadow " + styles.cardSetup}>
                <div className={"card-header " + styles.headerCrd}>
                  <div className={"text-center " + styles.eheading}>Employees</div>
                </div>

                <div
                  className={"card-body " + styles.cardBody}
                  data-bs-spy="scroll"
                  data-bs-target="#navbar-example"
                >
                  {emp.map((item, index) => {
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
                                      <span className={styles.ptext1}> {item1?.name}</span>
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


                                <div className={styles.itemName1}>
                                  Employee Id:  <span className={styles.ptext1}> {item?.empID}</span>
                                </div>
                                <div className={styles.itemName1}>
                                  Name:  <span className={styles.ptext1}> {item?.name}</span>
                                </div>
                                <div className={styles.itemName1}>
                                  Role:   {item?.roles?.map((item1, index1) => {
                                    return (
                                      <span className={styles.ptext1}> {item1?.name}</span>
                                    )
                                  })}
                                </div>
                                <div className={styles.itemName1}>
                                  Age          :  <span className={styles.ptext1}> {item?.age}</span>
                                </div>
                                <div className={styles.itemName1}>
                                  Gender        :  <span className={styles.ptext1}> {item?.gender}</span>
                                </div>
                                <div className={styles.itemName1}>
                                  Supervisor    :  <span className={styles.ptext1}> {item?.supervisor}</span>
                                </div>
                                <div className={styles.itemName1}>
                                  Email         :  <span className={styles.ptext1}> {item?.email}</span>
                                </div>
                                <div className={styles.itemName1}>
                                  Mobile Number :  <span className={styles.ptext1}> {item?.mobileNumber}</span>
                                </div>
                                <div className={styles.itemName1}>
                                  Address       :  <span className={styles.ptext1}> {item?.address}</span>
                                </div>
                                <div className={styles.itemName1}>
                                  City          :  <span className={styles.ptext1}> {item?.city}</span>
                                </div>
                                <div className={styles.itemName1}>
                                  State         :  <span className={styles.ptext1}> {item?.state}</span>
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
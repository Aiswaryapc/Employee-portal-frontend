import React from 'react';
import styles from "./AddProject.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProject(props) {
    const navigate = useNavigate();
  
    const [project, setProject] = useState({
        projName: "",
      jobopportunities: "",
      flowChart: "",
      owner: ""
      
    });
    
      
        function postProject(e) {
          e.preventDefault();
          
          axios
            .post("http://localhost:8093/api/test/project", project)
            .then((response) => {
              alert("New Project Added!!!");
              navigate("/project");
            }).catch((error) => {
             
              
            });
        }
      
      return (
          <div><div className={styles.display}>
        <div className="container p-0">
          <div class="container-fluid h-100">
            <div class="column d-flex justify-content-right align-items-right h-100">
              <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">
                <div className={"card shadow " + styles.cardSetup}>
                  <div className={"card-header " + styles.headerCrd}>
                    <div className={"text-center " + styles.eheading}>Add New Project</div>
                  </div>
  
                  <div
                    className={"card-body " + styles.cardBody}
                    data-bs-spy="scroll"
                    data-bs-target="#navbar-example"
                  >
                      <form>
                    <div class="row">
                    <label className={styles.label}>
                          <div className="text-left mt-1 mb-1 pb-1">
  
                            Project Name
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              value={project.projName}
                              onChange={(e) =>
                                setProject({ ...project, projName: e.target.value })
                              }
                              className={styles.input}
                            />
                          </div>
                        </label>
  
                        <label className={styles.label}>
                          <div className="text-left mt-1 mb-1 pb-1">
  
                            Vaccancies
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              value={project.jobopportunities}
                              onChange={(e) =>
                                setProject({ ...project, jobopportunities: e.target.value })
                              }
                              className={styles.input}
                            />
                          </div>
                        </label>
  
                        <label className={styles.label}>
                          <div className="text-left mt-1 mb-1 pb-1">
  
                            FlowChart Url
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              value={project.flowChart}
                              onChange={(e) =>
                                setProject({ ...project, flowChart: e.target.value })
                              }
                              className={styles.input}
                            />
                          </div>
                        </label>
                        <label className={styles.label}>
                          <div className="text-left mt-1 mb-1 pb-1">
  
                            Owner
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              value={project.owner}
                              onChange={(e) =>
                                setProject({ ...project, owner: e.target.value })
                              }
                              className={styles.input}
                            />
                          </div>
                        </label>
                        <button
                            className={styles.subtn}
                            onClick={(e) => {
                              postProject(e) 
                            }}
                          >
                            Create
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
      );
}

export default AddProject;
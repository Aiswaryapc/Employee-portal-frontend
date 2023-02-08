import React from 'react';
import styles1 from "./AddN.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from '../Nav/Navbar';
import { useNavigate } from "react-router-dom";

function AddNews(props) {
  const navigate = useNavigate();
  const [emp, setEmp] = useState();
  let empId = "";
  const [news, setNews] = useState({
    heading: "",
    description: "",
    image: "",
    email: ""
    
  });
  useEffect(() => {
    empId = localStorage.getItem("empId")

    axios.get(`http://localhost:8093/api/test/emp/${empId}`).then((response) => {
      setEmp(response.data.email);
      
     setNews({...news,email:response.data.email})
     
    });

  
  }, []);
    
      function postNews(e) {
        e.preventDefault();
        console.log(news)
        axios
          .post("http://localhost:8093/api/test/newsFeed/add", news)
          .then((response) => {
            alert("Posted new news!!!");
            navigate("/newsfeed");
          }).catch((error) => {
            alert("Description too long");
            
          });
      }
    
    return (
        <div><NavBar/><div className={styles1.display}>
      <div className="container p-0">
        <div class="container-fluid h-100">
          <div class="column d-flex justify-content-right align-items-right h-100">
            <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">
              <div className={"card shadow " + styles1.cardSetup}>
                <div className={"card-header " + styles1.headerCrd}>
                  <div className={"text-center " + styles1.eheading}>Add News</div>
                </div>

                <div
                  className={"card-body " + styles1.cardBody}
                 
                  data-bs-spy="scroll"
                  data-bs-target="#navbar-example"
                >
                    <form>
                  <div class="row"  style={{marginLeft:"20%"}}>
                  <label className={styles1.label}>
                        <div className="text-left mt-1 mb-1 pb-1">

                          Heading
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            value={news.heading}
                            onChange={(e) =>
                              setNews({ ...news, heading: e.target.value })
                            }
                            className={styles1.input}
                          />
                        </div>
                      </label>

                      <label className={styles1.label}>
                        <div className="text-left mt-1 mb-1 pb-1">

                          Description
                        </div>
                        <div className="form-outline mb-4">
                       
                          <textarea className={styles1.txtinput1}id="textAreaExample" rows="3" value={news.description}
                                          onChange={(e) =>
                                            setNews({ ...news, description: e.target.value })
                                          }></textarea>
                        </div>
                      </label>


                      <label className={styles1.label}>
                        <div className="text-left mt-1 mb-1 pb-1">

                          Image Link
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            value={news.image}
                            onChange={(e) =>
                              setNews({ ...news, image: e.target.value })
                            }
                            className={styles1.input}
                          />
                        </div>
                      </label>
                      <button 
                          className={styles1.subtn1}
                          style={{width:"20%" ,marginLeft:"25%"}}
                          onClick={(e) => {
                            postNews(e) 
                          }}
                        >
                          Post
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

export default AddNews;
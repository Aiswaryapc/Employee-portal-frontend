import React from 'react';
import styles from "./AddNews.module.css";
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
        <div><NavBar/><div className={styles.display}>
      <div className="container p-0">
        <div class="container-fluid h-100">
          <div class="column d-flex justify-content-right align-items-right h-100">
            <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">
              <div className={"card shadow " + styles.cardSetup}>
                <div className={"card-header " + styles.headerCrd}>
                  <div className={"text-center " + styles.eheading}>Add News</div>
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

                          Heading
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            value={news.heading}
                            onChange={(e) =>
                              setNews({ ...news, heading: e.target.value })
                            }
                            className={styles.input}
                          />
                        </div>
                      </label>

                      <label className={styles.label}>
                        <div className="text-left mt-1 mb-1 pb-1">

                          Description
                        </div>
                        <div className="form-outline mb-4">
                       
                          <textarea className={styles.txtinput1}id="textAreaExample" rows="3" value={news.description}
                                          onChange={(e) =>
                                            setNews({ ...news, description: e.target.value })
                                          }></textarea>
                        </div>
                      </label>


                      <label className={styles.label}>
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
                            className={styles.input}
                          />
                        </div>
                      </label>
                      <button
                          className={styles.subtn1}
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
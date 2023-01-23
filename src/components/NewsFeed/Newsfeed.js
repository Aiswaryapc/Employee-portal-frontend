import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Newsfeed.module.css";
import Accordion from "react-bootstrap/Accordion";
import NavBar from '../Nav/Navbar';
import SideBar from '../Nav/SideBar';
import Comment from './Comment';
import { Link, useNavigate } from "react-router-dom";
import AddNews from '../Admin/AddNews';
function Newsfeed(props) {
  const [post, setPost] = useState([]);
  const [add, setAdd] = useState("");
  const [showButton, setShowButton] = useState(false);
  let role = "";
  let token ="";
  const navigate = useNavigate();
  useEffect(() => {
    role = localStorage.getItem("role")
  token=localStorage.getItem("token")
    
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
  
  const bodyParameters = {
     key: "value"
  };
  
  axios.get( 
    'http://localhost:8093/api/test/newsFeed',
    bodyParameters,
    config
  ).then((response) => {
    setPost(response.data);
  });
   
    if (role === "ROLE_ADMIN") {
      setAdd("Add New Post");
      setShowButton(true)
    } else {
      setAdd("");
      setShowButton(false)
    }

  }, []);




  return (
    <>

      <NavBar/>
      <div> <div className={styles.display}>
        <div className="container p-0">



          <div class="container-fluid h-100">
            <div class="column d-flex justify-content-right align-items-right h-100">
              <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">


                <div className="mt-1 mb-5 pb-1">
                
                
                  <p className={styles.news}>News Feed</p>
                  
                  
                 
                  <div style={{ display: "flex" }}>
                    
                  {showButton &&   <button style={{ marginLeft: "auto" }} onClick={(e) => {
                             navigate("/addNews");
                          }} className={styles.nbutn}>{add}</button>}
                  
               
                  </div>
               </div>
                <div className="row">
                  {post.map((item, index) => {

                    return (
                      <Comment posts={item} />
                    );
                  })}
                </div>



              </div>
            </div>
          </div>

        </div>
      </div>
      </div>

    </>

  );
}

export default Newsfeed;
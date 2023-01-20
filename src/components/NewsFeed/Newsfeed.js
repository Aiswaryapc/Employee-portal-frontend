import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Newsfeed.module.css";
import Accordion from "react-bootstrap/Accordion";
import NavBar from '../Nav/Navbar';
import SideBar from '../Nav/SideBar';
import Comment from './Comment';
function Newsfeed(props) {
  const [post, setPost] = useState([]);
 
  useEffect(() => {


    axios.get(`http://localhost:8093/api/test/newsFeed`).then((response) => {
      setPost(response.data);
     
    });


  },[]);



  return (
   <>
  
    
    <div> <div className={styles.display}>
      <div className="container p-0">



        <div class="container-fluid h-100">
          <div class="column d-flex justify-content-right align-items-right h-100">
            <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">


              <h2 className="mt-1 mb-5 pb-1">
                <p className={styles.news}>News Feed</p>
              </h2>
              <div className="row">
                {post.map((item, index) => {
                  
                  return (
                    <Comment posts={item}/>
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
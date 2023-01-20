import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Newsfeed.module.css";
import Accordion from "react-bootstrap/Accordion";
import NavBar from '../Nav/Navbar';
import SideBar from '../Nav/SideBar';
import { IoSend } from "react-icons/io5";
function Comment(props) {
    const [comment, setComment] = useState({
        comment: "",
        employeeName:"Aish",
        newsfeedheading:props.posts.heading
      });
      function postComment(e) {
        e.preventDefault();
        console.log(comment);
        axios
          .post("http://localhost:8093/api/test/comment/add", comment)
          .then((response) => {
            window.location.reload(true);
            alert("success")
            // navigate("/newsfeed");
          })
         
      }
    return (
        
                    <div className={"col-12 col-md-12 pb-5 pt-3"} >
                      <div className='bcolor'>
                        <div className={"card m-8 p-1 shadow-sm " + styles.ncrdSetup}>

                          <div className="row g-0">
                            <div
                              className="col-md-4"
                              style={{
                                backgroundImage: `url(${props.posts.image})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                              }}
                            >

                            </div>
                            <div className="col-md-8" style={{ padding: "2%" }}>
                              <div className="card-body">
                                <h5 className={styles.nheading}>{props.posts.heading}</h5>
                                <p className="card-text">{props.posts.description}</p>
                                <p className="card-text">

                                </p>



                              </div>
                            </div>

                            <Accordion >
                              <Accordion.Item eventKey="0" color='#e2d7dd' >
                                
                                <Accordion.Header className={styles.ncrdSetup} >
                                  <div className={"col-md-11"}>
                                    <div className={"d-flex mx-auto"}>

                                      <div class="form-outline w-100">
                                      <div className={styles.bcolor}>
                                        <label className="form-label" for="textAreaExample">Write a comment</label>

                                        <textarea className="form-control" id="textAreaExample" rows="2" value={comment.comment}
                                          onChange={(e) =>
                                            setComment({ ...comment, comment: e.target.value })
                                          }></textarea>
                                          </div>
                                      </div>
                                      <IoSend className={styles.comment}   onClick={(e) => {
                            postComment(e);
                          }}/>
                                    </div>
                                   
                                  </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                  <div className="col">
                                    <div className="row p-3" >
                                      <div className="col-md-8 d-flex">

                                      </div>
                                    </div>
                                    {props.posts.comment?.map((item1, index1) => {
                                      return (
                                        <div className={styles.bcolor}>
                                        <div className="row p-3" key={index1}>

                                          <div className={styles.itemDes}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#692038" class="bi bi-person-circle m-2" viewBox=" 0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="#692038" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                  </svg>
                                            {item1?.employee?.name}
                                          </div>
                                          <div className={styles.itemcmt}>
                                            {item1?.comment}
                                          </div>
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
                    </div>
                  );
               
                                }

export default Comment;
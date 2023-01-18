import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Newsfeed.module.css";
import Accordion from "react-bootstrap/Accordion";
function Newsfeed(props) {
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState({
    comment: ""
  });
  useEffect(() => {


    axios.get(`http://localhost:8093/api/test/newsFeed`).then((response) => {
      setPost(response.data);
    });


  },[]);



  return (
    <div> <div className='bcolor'>
      <div className="container p-0">



        <div class="container-fluid h-100">
          <div class="column d-flex justify-content-right align-items-right h-100">
            <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">


              <h2 className="mt-1 mb-5 pb-1">
                <p className="news">News Feed</p>
              </h2>
              <div className="row">
                {post.map((item, index) => {
                  return (
                    <div className={"col-12 col-md-12 pb-5 pt-3"} key={index}>
                      <div className='bcolor'>
                        <div className={"card m-8 p-1 shadow-sm " + styles.crdSetup}>

                          <div className="row g-0">
                            <div
                              className="col-md-4"
                              style={{
                                backgroundImage: `url(${item?.image})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                              }}
                            >

                            </div>
                            <div className="col-md-8" style={{ padding: "2%" }}>
                              <div className="card-body">
                                <h5 className="card-title">{item.heading}</h5>
                                <p className="card-text">{item.description}</p>
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

                                        <label className="form-label" for="textAreaExample">Write a comment</label>

                                        <textarea className="form-control" id="textAreaExample" rows="2" value={comment.comment}
                                          onChange={(e) =>
                                            setComment({ ...comment, comment: e.target.value })
                                          }></textarea>
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
                                    {item?.comment?.map((item1, index1) => {
                                      return (
                                        <div className="row p-3" key={index1}>

                                          <div className={styles.itemDes}>
                                            {item1?.employee?.name}
                                          </div>
                                          <div className={styles.itemName}>
                                            {item1?.comment}
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
                })}
              </div>



            </div>
          </div>
        </div>

      </div>
    </div>
    </div>


  );
}

export default Newsfeed;
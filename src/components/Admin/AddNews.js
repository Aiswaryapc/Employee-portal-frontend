import React from 'react';
import styles from "./AddNews.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
function AddNews(props) {
    const [news, setNews] = useState({
        heading: "",
        description: "",
        image: "",
        employeeName: "",
        
      });
    return (
        <div><div className={styles.display}>
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
                          className={styles.subtn}
                          onClick={(e) => {
                            
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
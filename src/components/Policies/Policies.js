
import styles from "./Policies.module.css"
import ViewPdf from "./ViewPDF";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from '../Nav/Navbar';
import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";



function Policies(props) {
  const [showButton, setShowButton] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  let token = localStorage.getItem("token") 
  let role = "";

  
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [names, setNames] = useState([]);



  const [state, setState] = useState({
    file: "",
  });
  const [name, setName] = useState();
  let formdata = new FormData();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 




  useEffect(() => {
    role = localStorage.getItem("role")
  if (role === "ROLE_ADMIN") {
    setShowButton(true)
  } else {

    setShowButton(false)
  }
    axios.get("http://localhost:8093/api/test/documents/names", config).then((response) => {
      setNames(response.data);
    });
  }, []);
  //   console.log(names);


  const getSearchTerm = (e) => {
    e.preventDefault();

     setSearchTerm(e.target.value);
  };
  if (searchTerm.length > 0) {
    console.log(searchTerm)
    names.filter((name) => {
    return name.documentName.match(searchTerm);
});

}

function handleFile(e) {
  let file = e.target.files[0];
  setState({ ...state, file: file });
}
function addPolicy(e) {
  let file = state.file;

  let formdata = new FormData();
  console.log(name);
  console.log(file);
  formdata.append('documentId',name);
  formdata.append('file', file);
  console.log(formdata.documentId)
  axios({
    url: 'http://localhost:8093/api/test/add-document',
    method: "POST",
    data: formdata
  }).then((response) => {
    handleClose()
    window.location.reload(true)
    })





}



  return (
    <div>
      <NavBar/>
      <div >
      <div className={styles.allpolicies} >
      <div className="container-fluid p-5">
      
          <div className={styles.heading} style={{ textAlign: "center" }}>
            Company Policies   {showButton && <button className={styles.subtn} onClick={handleShow}>Add Policy</button>}
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title><div className={"text-center " + styles.meheading}>Upload Policy</div></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label><div className={styles.label}>Policy Name</div></Form.Label>
                  <Form.Control 
                    type="text"
                    // placeholder="name@example.com"
                    autoFocus
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  {/* <Form.Label>Policy Name</Form.Label> */}
                  <div className={styles.label}>
                                      <input type="file" onChange={(e) =>
                                                        handleFile(e)
                                                    } /></div>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="light" onClick={handleClose}>
                Close
              </Button> */}
              <Button className={styles.subtn}
                variant="secondary"
                onClick={(e) => {
                  addPolicy(e);
                }}
              >
                Add
              </Button>
            </Modal.Footer>
          </Modal>
          <div className={styles.search}>
            <div>
              <input
                className={styles.input}
                type="search"
                placeholder="Search Policies"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                
              />
              <FaSearch className={styles.icon} />
            </div>
          </div>
          {names.filter((name) =>
          name.documentName.toLowerCase().includes(searchTerm.toLowerCase()))

          ?.map((item, index) => {
            
            return (<div className="row"><ViewPdf item={item} index={index}/></div>);
          })}</div>
        </div>
      </div>
    </div>
  );
}

export default Policies;
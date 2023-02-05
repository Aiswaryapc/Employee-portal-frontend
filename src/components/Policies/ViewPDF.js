import React from 'react'
import styles from "./Policies.module.css"
import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from "axios";
function ViewPdf(props) {
    let token =localStorage.getItem("token");
    const [isLoading, setIsLoading] = useState(true);
    const [viewPdf, setViewPdf] = useState(false);
    const closePdf = () => setViewPdf(false);
    // const openPdf = () => setViewPdf(true);
    const [document, setDocument] = useState(null);
    const openPdf = () =>  {
        setViewPdf(true)
        axios.get(`http://localhost:8093/api/test/document/${props.item.documentName}`,config)
            .then((response) => {
                setDocument(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error.response.data);
            })
    }
    const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
    if (isLoading) {
        return (
            
                    <div className={"col-12 col-md-4 " +styles.card1 } onClick={openPdf}>{props.item.documentName}</div>
                   
              
          
        )
    }
    return (
        <div>
            <div>
                <Modal
                    show={viewPdf}
                    size='lg'
                    fullscreen={'below lg'}
                >
                    <Modal.Header closeButton onClick={closePdf}>
                        <Modal.Title>{props.item.documentName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe
                            src={`data:application/pdf;base64,${document}`}
                            title={document['fileName']}
                            width='100%'
                            height='500rem'
                        />
                    </Modal.Body>
                   
                </Modal>
            </div>
            
            <div className={"col-12 col-md-4 " +styles.card1} onClick={openPdf}>{props.item.documentName}</div>
            </div>   
    );

}

export default ViewPdf
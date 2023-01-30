import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

function ViewPdf(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [viewPdf, setViewPdf] = useState(true);
    const closePdf = () => setViewPdf(false);
    const openPdf = () => setViewPdf(true);
    const [document, setDocument] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8093/api/test/document/${props.name}`)
            .then((response) => {
                setDocument(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error.response.data);
            })
    }, [])
    if (isLoading) {
        return (
            <div>
                <Button variant='primary' onClick={openPdf}>ViewPDF</Button>
            </div>
        )
    }
    return (
        <div>
            <div>
                <Modal
                    show={viewPdf}
                    size='xl'
                    fullscreen={'below lg'}
                >
                    <Modal.Header closeButton onClick={closePdf}>
                        <Modal.Title>{document['fileName']}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe
                            src={`data:application/pdf;base64,${document}`}
                            title={document['fileName']}
                            width='100%'
                            height='650rem'
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={closePdf}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
                <Button variant='primary' onClick={openPdf}>ViewPDF</Button>
        </div>
    );
}

export default ViewPdf;
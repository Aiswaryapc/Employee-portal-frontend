
import React, { Component } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Product.module.css";
import Accordion from "react-bootstrap/Accordion";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import SingleProductpage from "./singleProductpage";


function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 1500,
       
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));




function Product(props) {

    const [product, setProduct] = useState([]);
    useEffect(() => {


        axios.get(`http://localhost:8093/api/test/product/`).then((response) => {
            setProduct(response.data);
        });


    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [modalData, setModalData] = useState(null);
    const [openModal, setOpenModal] = useState();
   const modelOpen=(id) =>{ if (openModal === id) {
        setOpen (true)
    }}

    const handleClick = (item) => {
        <singleProductpage data= {item}/>
      }

    return (

        <div>
            <div className="container p-0">



                <div class="container-fluid h-100">
                    <div class="column d-flex justify-content-right align-items-right h-100">
                        <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">


                            <h2 className="mt-1 mb-5 pb-1">
                                <p className={styles.pmheading}>Products</p>
                            </h2>
                            <div className="row">
                                {product.map((item, index) => {
                                    return (
                                        <div className={"col-12 col-md-4 pb-5 pt-3"} key={index}>
                                            <div className={styles.zoom}>
                                                <div className={"card m-4 p-1 shadow-sm " + styles.pcrdSetup}>

                                                    <div className="row g-0">

                                                        <div
                                                            className="col-md-4"

                                                            style={{
                                                                backgroundImage: `url(${item?.imageUrl})`,
                                                                backgroundRepeat: "no-repeat",
                                                                backgroundSize: "contain",

                                                            }} onClick={()=> {
                                                                setOpen(true);
                                                                
                                                                setModalData(item);}}
                                                        ></div>
                            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>Image</h2>
                   
                   <img src={modalData?.detailedImageUrl}  className={styles.photo}></img>
                   
                </div>
            </Modal>

                                                        <div className="col-md-8" style={{ padding: "2%" }}>
                                                            <div className="card-body">
                                                                <h5 className="card-title"><div className={styles.pheading}>{item.name}</div> </h5>
                                                                
                                                                <p className="card-text">Details : <span className={styles.ptext}>{item.description}</span> </p>
                                                                <p className="card-text">

                                                                </p>



                                                            </div>
                                                        </div>

                                                        <div>
      <button onClick={handleClick}>More..</button>
      
    </div>


                            

                                                        {/* <Accordion>
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header>
                                                                    <div className={"col-md-11"}>
                                                                        <div className={"d-flex mx-auto"}>

                                                                            <div class="form-outline w-100">

                                                                                <h6>Employees</h6>
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
                                                                        {item?.employee?.map((item1, index1) => {
                                                                            return (
                                                                                <div className="row p-3" key={index1}>

                                                                                    <div className={styles.itemDes}>
                                                                                        Name: <span className={styles.ptext1}>  {item1?.name}</span>
                                                                                    </div>
                                                                                    {item1?.roles?.map((item2, index2) => {
                                                                                        return (
                                                                                            <div className={styles.itemName}>
                                                                                                Role:  <span className={styles.ptext1}> {item2?.name}</span>
                                                                                            </div>)
                                                                                    })}


                                                                                </div>

                                                                            );
                                                                        })}
                                                                    </div>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion> */}
                                                        {/* <Accordion>
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header>
                                                                    <div className={"col-md-11"}>
                                                                        <div className={"d-flex mx-auto"}>

                                                                            <div class="form-outline w-100">

                                                                                <h6>Stakeholders</h6>
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
                                                                        {item?.stakeholder?.map((item1, index1) => {
                                                                            return (
                                                                                <div className="row p-3" key={index1}>

                                                                                    <div className={styles.itemDes}>
                                                                                        Name:  <span className={styles.ptext1}> {item1?.name}</span>
                                                                                    </div>
                                                                                    <div className={styles.itemName}>
                                                                                        Position: <span className={styles.ptext1}>  {item1?.position}</span>
                                                                                    </div>


                                                                                </div>

                                                                            );
                                                                        })}
                                                                    </div>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion> */}

                                                  
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


    );
}

export default Product;
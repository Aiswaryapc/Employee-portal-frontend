
import React, { Component } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Product.module.css";
import Accordion from "react-bootstrap/Accordion";
import NavBar from '../Nav/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import { Link, useNavigate } from "react-router-dom";


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

    const [showButton, setShowButton] = useState(false);
    let role = "";
    let token = "";
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        role = localStorage.getItem("role")
        token = localStorage.getItem("token")

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };



        axios.get(
            'http://localhost:8093/api/test/product/',

            config
        ).then((response) => {
            setProduct(response.data);
        });

        if (role === "ROLE_ADMIN") {
            setShowButton(true)
        } else {

            setShowButton(false)
        }

    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [modalData, setModalData] = useState(null);
    const [openModal, setOpenModal] = useState();
    const modelOpen = (id) => {
        if (openModal === id) {
            setOpen(true)
        }
    }

    const handleClick = (item) => {
        <singleProductpage data={item} />
    }

    return (

        <div>
            <NavBar />
            <div className="container p-0">



                <div class="container-fluid h-100">
                    <div class="column d-flex justify-content-right align-items-right h-100">
                        <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">


                            <h2 className="mt-1 mb-5 pb-1">
                                <p className={styles.pro}>Products</p>
                            </h2>
                            <div style={{ display: "flex" }}>

                                {showButton && <button style={{ marginLeft: "auto" }} onClick={(e) => {
                                    navigate("/addproduct");
                                }} className={styles.nbutn}>Add New Product</button>}


                            </div>
                            <div className="row">
                                {product.map((item, index) => {
                                    return (
                                        <div className={"col-12 col-md-6 pb-5 pt-3"} key={index}>
                                            <div className={styles.zoom}>
                                                <div className={"card m-4 p-1 shadow-sm " + styles.pcrdSetup}>

                                                    <div className="row g-0">

                                                        <div
                                                            className="col-md-8"

                                                            style={{
                                                                backgroundImage: `url(${item?.imageUrl})`,
                                                                backgroundRepeat: "no-repeat",
                                                                backgroundSize: "cover",

                                                            }} 
                                                        >

                                                    
                                                        </div>
                                                        <Modal
                                                            aria-labelledby="simple-modal-title"
                                                            aria-describedby="simple-modal-description"
                                                            open={open}
                                                            onClose={handleClose}
                                                        >
                                                            <div style={{ outline: 'none' }} className={styles.model}>
                                                                <div className={styles.display}>
                                                                    <div className="container p-0">
                                                                        <div class="container-fluid h-100">
                                                                            <div class="column d-flex justify-content-center align-items-center h-100">
                                                                                <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">
                                                                                    <div className={"card shadow " + styles.cardSetup}>
                                                                                        <div className={"card-header " + styles.headerCrd}>
                                                                                            <div className={"text-center " + styles.eheading}>Product Details</div>
                                                                                        </div>


                                                                                        <div
                                                                                            className={"card-body " + styles.cardBody}
                                                                                            data-bs-spy="scroll"
                                                                                            data-bs-target="#navbar-example"
                                                                                        ><div className={styles.labelh}> Name :<span className={styles.label}>{modalData?.name}</span></div>
                                                                                            <div className={styles.labelh1}>Category :<span className={styles.label1}> {modalData?.category}</span></div>

                                                                                            <img src={modalData?.detailedImageUrl} className={styles.photo}></img>

                                                                                            <div className={styles.des}> {modalData?.description}</div>


                                                                                            <button
                                                                                                id="button"
                                                                                                onClick={(e) => setOpen(false)}
                                                                                                className={styles.subtn}

                                                                                            >
                                                                                                Close
                                                                                            </button>

                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </Modal>

                                                        <div className="col-md-4" style={{ padding: "2%" }}>

                                                            <h5 className="card-title"><div className={styles.pheading}>{item.name}</div> </h5>

                                                            <button className={styles.subtn2} onClick={() => {
                                                                setOpen(true);
                                                                setModalData(item);
                                                            }}>View..</button>




                                                        </div>








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
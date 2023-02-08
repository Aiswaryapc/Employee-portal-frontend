import React from 'react';
import styles from "./AddProduct.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from '../Nav/Navbar';
function AddProduct(props) {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        category: "",
        name: "",
        imageUrl: "",
        detailedImageUrl: "",
        description: ""

    });


    function postProduct(e) {
        e.preventDefault();
        axios
            .post("http://localhost:8093/api/test/product/add", product)
            .then((response) => {
                alert("New Product Added!!!");
                navigate("/product");
            }).catch((error) => {
                alert("Some field is too long");

            });
    }

    return (
        <div><NavBar/><div className={styles.display}>
            <div className="container p-0">
                <div class="container-fluid h-100">
                    <div class="column d-flex justify-content-right align-items-right h-100">
                        <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">
                            <div className={"card shadow " + styles.cardSetup}>
                                <div className={"card-header " + styles.headerCrd}>
                                    <div className={"text-center " + styles.eheading}>Add Product</div>
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

                                                    Product Category
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        value={product.category}
                                                        onChange={(e) =>
                                                            setProduct({ ...product, category: e.target.value })
                                                        }
                                                        className={styles.input}
                                                    />
                                                </div>
                                            </label>

                                            <label className={styles.label}>
                                                <div className="text-left mt-1 mb-1 pb-1">

                                                    Product Name
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        value={product.name}
                                                        onChange={(e) =>
                                                            setProduct({ ...product, name: e.target.value })
                                                        }
                                                        className={styles.input}
                                                    />
                                                </div>
                                            </label>
                                            <label className={styles.label}>
                                                <div className="text-left mt-1 mb-1 pb-1">

                                                    Image Url
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        value={product.imageUrl}
                                                        onChange={(e) =>
                                                            setProduct({ ...product, imageUrl: e.target.value })
                                                        }
                                                        className={styles.input}
                                                    />
                                                </div>
                                            </label>

                                            <label className={styles.label}>
                                                <div className="text-left mt-1 mb-1 pb-1">

                                                    Detailed Image Url
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        value={product.detailedImageUrl}
                                                        onChange={(e) =>
                                                            setProduct({ ...product, detailedImageUrl: e.target.value })
                                                        }
                                                        className={styles.input}
                                                    />
                                                </div>
                                            </label>
                                            <label className={styles.label}>
                                                <div className="text-left mt-1 mb-1 pb-1">

                                                    Product Description
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        value={product.description}
                                                        onChange={(e) =>
                                                            setProduct({ ...product, description: e.target.value })
                                                        }
                                                        className={styles.input}
                                                    />
                                                </div>
                                            </label>
                                            <button
                                                className={styles.subtn}
                                                onClick={(e) => {
                                                    postProduct(e)
                                                }}
                                            >
                                                +Add
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

export default AddProduct;
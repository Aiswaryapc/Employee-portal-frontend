import React from 'react';
import styles from "./AddProject.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddStakeholder(props) {
    const navigate = useNavigate();

    const [stake, setStake] = useState({
        name: "",
        organaization: "",
        position: "",
        email: "",
        state: ""

    });


    function postStake(e) {
        e.preventDefault();

        axios
            .post("http://localhost:8093/api/test/add/stakeholder", stake)
            .then((response) => {
                alert("New Stakeholder Added!!!");
                navigate("/stakeholders");
            }).catch((error) => {


            });
    }

    return (
        <div><div className={styles.display}>
            <div className="container p-0">
                <div class="container-fluid h-100">
                    <div class="column d-flex justify-content-right align-items-right h-100">
                        <div class="col-md-12 col-lg-12 col-xl-12 offset-xl-1">
                            <div className={"card shadow " + styles.cardSetup}>
                                <div className={"card-header " + styles.headerCrd}>
                                    <div className={"text-center " + styles.eheading}>Add New Stakeholder</div>
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

                                                    Stakeholder Name
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        value={stake.name}
                                                        onChange={(e) =>
                                                            setStake({ ...stake, name: e.target.value })
                                                        }
                                                        className={styles.input}
                                                    />
                                                </div>
                                            </label>

                                            <label className={styles.label}>
                                                <div className="text-left mt-1 mb-1 pb-1">

                                                    Organaization
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        value={stake.organaization}
                                                        onChange={(e) =>
                                                            setStake({ ...stake, organaization: e.target.value })
                                                        }
                                                        className={styles.input}
                                                    />
                                                </div>
                                            </label>
                                            <label className={styles.label}>
                                                <div className="text-left mt-1 mb-1 pb-1">

                                                    Position
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        value={stake.position}
                                                        onChange={(e) =>
                                                            setStake({ ...stake, position: e.target.value })
                                                        }
                                                        className={styles.input}
                                                    />
                                                </div>
                                            </label>
                                            <label className={styles.label}>
                                                <div className="text-left mt-1 mb-1 pb-1">

                                                    Email
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        value={stake.email}
                                                        onChange={(e) =>
                                                            setStake({ ...stake, email: e.target.value })
                                                        }
                                                        className={styles.input}
                                                    />
                                                </div>
                                            </label>
                                            <label className={styles.label}>
                                                <div className="text-left mt-1 mb-1 pb-1">

                                                    State
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        value={stake.state}
                                                        onChange={(e) =>
                                                            setStake({ ...stake, state: e.target.value })
                                                        }
                                                        className={styles.input}
                                                    />
                                                </div>
                                            </label>
                                            <button
                                                className={styles.subtn}
                                                onClick={(e) => {
                                                    postStake(e)
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

export default AddStakeholder;

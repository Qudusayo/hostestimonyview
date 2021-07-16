import React from "react";

import styles from "./style.module.scss";

function index(props) {
    return (
        <div
            className={[
                styles.container,
                props.darkMode ? styles.darkMode : styles.lightMode,
            ].join(" ")}
        >
            <img src={props.photo} alt={props.name} />
            <div className={styles.content}>
                <h3>{props.name ? props.name : null}</h3>
                <p>
                    <span className={styles.bold}>Set: </span>
                    {props.username ? props.set : null}
                </p>
                <p>
                    <span className={styles.bold}>Sex: </span>
                    {props.username ? props.sex[0].toUpperCase()+props.sex.slice(1) : null}
                </p>
                <p>
                    <span className={styles.bold}>Course Of Study: </span>
                    {props.username ? props.username : null}
                </p>
                <p>
                    <span className={styles.bold}>School Of Choice: </span>
                    {props.phoneNumber ? props.phoneNumber : null}
                </p>
                <p>
                    <span className={styles.bold}>About HOS: </span>
                    {props.paymentMethod ? props.paymentMethod : null}
                </p>
            </div>
        </div>
    );
}

export default index;

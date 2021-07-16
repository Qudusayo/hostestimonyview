import React from "react";
import style from "./style.module.scss";

function index(props) {
    return (
        <div className={style.pagination}>
            {[...Array(Math.ceil(props.unit / 20))].map((x, i) => (
                <span key={i} onClick={() => props.setPage(i)}>{i+1}</span>
            ))}
        </div>
    );
}

export default index;

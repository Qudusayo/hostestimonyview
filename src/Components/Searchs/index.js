import React from "react";
import styles from "./style.module.scss";

function index(props) {
    const usersFilterHandler = (e) => {
        props.filterUsers(e.target.value);
    };
    const searchUserHandler = (e) => {
        props.searchUser(e.target.value);
        console.log(e.target.value);
    };
    return (
        <div
            className={[
                styles.bar,
                props.darkMode ? styles.darkMode : styles.lightMode,
            ].join(" ")}
        >
            <input
                placeholder="Search for user"
                onChange={searchUserHandler}
            />
            <select onChange={usersFilterHandler}>
                <option value="">Filter By None</option>
                {props.result ? (
                    <>
                        <option value="" disabled>
                            Filter By Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="pos">Prefer to skip</option>
                        <option value="" disabled>
                            Filter By Payment Method
                        </option>
                        <option value="cc">cc</option>
                        <option value="check">check</option>
                        <option value="paypal">paypal</option>
                        <option value="money order">money order</option>
                    </>
                ) : null}
            </select>
        </div>
    );
}

export default index;

import React from "react";
import style from "./style.module.scss";
import male from "./../../assets/images/male.svg";
import female from "./../../assets/images/female.svg";

const getBg = (sex) => {
    if (sex.toLowerCase() === "male") {
        return { backgroundImage: `url('${male}')` };
    } else if (sex.toLowerCase() === "female") {
        return {
            backgroundImage: `url('${female}')`,
            backgroundColor: "rgb(175,175,175)",
        };
    } else {
        return { backgroundColor: "rgb(175,175,175)" };
    }
};

function index(props) {
    return (
        <div
            className={style.preview}
            style={props.open ? { top: "0" } : { top: "-200vh" }}
        >
            <span className={style.close} onClick={props.close}>
                ×
            </span>
            <div className={style.userInfo}>
                <div
                    className={style.sex}
                    style={props.info.Gender ? getBg(props.info.Gender) : null}
                ></div>
                <div className={style.info}>
                    <div className={style.flex}>
                        <div>
                            <span>FirstName</span>
                            <p>
                                {props.info.FirstName
                                    ? props.info.FirstName
                                    : "FirstName"}
                            </p>
                        </div>
                        <div>
                            <span>LastName</span>
                            <p>
                                {props.info.LastName
                                    ? props.info.LastName
                                    : "LastName"}
                            </p>
                        </div>
                    </div>
                    <div className={style.flex}>
                        <div>
                            <span>Email</span>
                            <p>
                                {props.info.Email ? props.info.Email : "Email"}
                            </p>
                        </div>
                        <div>
                            <span>Username</span>
                            <p>
                                {props.info.UserName
                                    ? props.info.UserName
                                    : "UserName"}
                            </p>
                        </div>
                    </div>
                    <div className={style.flex}>
                        <div>
                            <span>Gender</span>
                            <p>
                                {props.info.Gender
                                    ? props.info.Gender
                                    : "Gender"}
                            </p>
                        </div>
                        <div>
                            <span>Phone Number</span>
                            <p>
                                {props.info.PhoneNumber
                                    ? props.info.PhoneNumber
                                    : "PhoneNumber"}
                            </p>
                        </div>
                    </div>
                    <div className={style.flex}>
                        <div>
                            <span>Latitude</span>
                            <p>
                                {props.info.Latitude
                                    ? props.info.Latitude
                                    : "Latitude"}
                            </p>
                        </div>
                        <div>
                            <span>Longitude</span>
                            <p>
                                {props.info.Longitude
                                    ? props.info.Longitude
                                    : "Longitude"}
                            </p>
                        </div>
                    </div>
                    <div className={style.flex}>
                        <div>
                            <span>Credit Card Number</span>
                            <p>
                                {props.info.CreditCardNumber
                                    ? props.info.CreditCardNumber
                                    : "CreditCardNumber"}
                            </p>
                        </div>
                        <div>
                            <span>Credit Card Type</span>
                            <p>
                                {props.info.CreditCardType
                                    ? props.info.CreditCardType
                                    : "CreditCardType"}
                            </p>
                        </div>
                    </div>
                    <div className={style.flex}>
                        <div>
                            <span>Payment Method</span>
                            <p>
                                {props.info.PaymentMethod
                                    ? props.info.PaymentMethod
                                    : "PaymentMethod"}
                            </p>
                        </div>
                        <div>
                            <span>Last Login</span>
                            <p>
                                {props.info.LastLogin
                                    ? props.info.LastLogin
                                    : "LastLogin"}
                            </p>
                        </div>
                    </div>
                    <div className={style.flex}>
                        <div>
                            <span>Domain Name</span>
                            <p>
                                {props.info.DomainName
                                    ? props.info.DomainName
                                    : "DomainName"}
                            </p>
                        </div>
                        <div>
                            <span>Url</span>
                            <p>{props.info.URL ? props.info.URL : "URL"}</p>
                        </div>
                    </div>
                    <div className={style.flex}>
                        <div>
                            <span>MAC Address</span>
                            <p>
                                {props.info.MacAddress
                                    ? props.info.MacAddress
                                    : "MacAddress"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;

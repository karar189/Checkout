import React from "react";
import styles from "../../styles/style";
import {
  BorderBox,
  UserForm,
  Button,
  RightConfirmPayment,
  RightDetails,
} from "../uiComponents/index";

const PaymentContainer = () => {
  return (
    <>
      <div
        className={`${styles.paddingX} ${styles.paddingY} ${styles.marginX} ${styles.flexBetween} `}
      >
        <div className="left w-2/3 pr-10">
          <p className={`${styles.heading1} mb-16`}>Confirm & pay</p>
          <BorderBox>
            <div className={`${styles.flexBetween}`}>
              <p className={`${styles.paragraph}`}>Free cancellation</p>
              <img src={""} alt="icon" />
            </div>
            <p className={`${styles.paragraph2}`}>
              Tickets can be cancelled by 13th December, 2022.
            </p>
          </BorderBox>
          <div className="userForm">
            <UserForm />
          </div>
        </div>
        <div className="right w-1/3">
          <BorderBox>
            <div className="ImageContainer"></div>
            <div className="details">
              <RightDetails />
            </div>
            <div className="ConfirmPayment ">
              <RightConfirmPayment />
            </div>
          </BorderBox>
        </div>
      </div>
    </>
  );
};

export default PaymentContainer;

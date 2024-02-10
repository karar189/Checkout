import React from "react";
import styles from "../../styles/style";
import {
  BorderBox,
  UserForm,
  RightConfirmPayment,
  RightDetails,
  RightSlider,
} from "../uiComponents/index";
import info from "../../assets/sec1_Info.png";

const PaymentContainer = () => {
  return (
    <>
      <div
        className={`${styles.paddingX} ${styles.paddingY} ${styles.marginX}  `}
      >
        <div className="">
          {" "}
          <p className={`${styles.heading1} md:mb-16 mb-2 md:hidden block`}>
            Confirm & pay
          </p>
        </div>
        <div className="flex md:flex-row flex-col-reverse">
          {" "}
          <div className="left md:w-2/3 ">
            <p className={`${styles.heading1} mb-16 hidden md:block`}>
              Confirm & pay
            </p>
            <BorderBox className={`border-[#D3D4DB]`}>
              <div className="py-2">
                {" "}
                <div className={`${styles.flexBetween}`}>
                  <p className={`${styles.paragraph} `}>Free cancellation</p>
                  <img src={info} alt="icon" className="w-5 h-5" />
                </div>
                <p className={`${styles.paragraph2} mt-1 md:pr-0 pr-10`}>
                  Tickets can be cancelled by 13th December, 2022.
                </p>
              </div>
            </BorderBox>
            <div className="userForm">
              <UserForm />
            </div>
          </div>
          <div className="right md:w-1/3 md:pl-6">
            <BorderBox className={`rounded-3xl border-[#D3D4DB]`}>
              <div className="ImageContainer">
                <RightSlider />
              </div>
              <div className="details">
                <RightDetails />
              </div>
              <div className="ConfirmPayment ">
                <RightConfirmPayment />
              </div>
            </BorderBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentContainer;

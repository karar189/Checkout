import React, { useState } from "react";
import styles from "../../../styles/style";
import star from "../../../assets/sec1_star.png";
import ticket from "../../../assets/ticket.png";
import calendar from "../../../assets/calendar.png";
import clock from "../../../assets/clock.png";
import user from "../../../assets/user.png";
import plus from "../../../assets/plus.png";
import piggy from "../../../assets/piggy.png";

const InfoItem = ({ icon, text }) => (
  <div className={`${styles.paragraph} flex items-center font-semibold`}>
    <img src={icon} alt="Icon" className="w-4 h-4 mr-2" />
    <span>{text}</span>
  </div>
);

const RightDetails = () => {
  const [showPaymentSummary, setShowPaymentSummary] = useState(false);

  const ticketTypeInfo = { icon: ticket, text: "Ticket Type" };
  const dateInfo = { icon: calendar, text: "Date" };
  const timeInfo = { icon: clock, text: "Time" };
  const guestInfo = { icon: user, text: "5 Guest" };

  const togglePaymentSummary = () => {
    setShowPaymentSummary(!showPaymentSummary);
  };

  return (
    <div className={`${styles.flexStart} flex-col`}>
      <div className="mb-2">
        <div className={`${styles.paragraph2} flex items-center`}>
          <span className="mr-2 flex">
            <img src={star} alt="star" className="h-4 w-4 mt-[2px] mr-1" />{" "}
            <b>4.9</b> (4.5k)
          </span>
          <span className="text-gray-500">
            · <span> category</span>
          </span>
        </div>
      </div>
      <div
        className={`${styles.subheading2} mb-1 font-semibold text-[#1C2024]`}
      >
        Amsterdam open boat canal cruise - Live Guide - from Anne Frank House
      </div>

      <div className={`${styles.flexBetween} my-4 flex-col `}>
        <InfoItem {...ticketTypeInfo} />
        <InfoItem {...dateInfo} />
        <div className={`${styles.paragraph4} flex items-center ml-6`}>
          <span>Date</span>
        </div>
        <InfoItem {...timeInfo} />
        <div className={`${styles.paragraph4} flex items-center ml-6`}>
          <span>Operating Hours</span>
        </div>
        <InfoItem {...guestInfo} />
      </div>
      <div class="border-t border-[#60646C] border-dashed w-full"></div>

      <div className="my-4 w-full">
        <button
          onClick={togglePaymentSummary}
          className={`w-full flex justify-between ${styles.paragraph2} font-semibold text-[#60646C]`}
        >
          <u className="">View Payment Summary</u>
          {/* <div>{showPaymentSummary ? "−" : "+"}</div> */}
          <img src={showPaymentSummary ? "-" : plus} alt="" />
        </button>
        {showPaymentSummary && (
          <div
            className={`w-full  ${styles.paragraph2} font-semibold text-[#60646C] mt-2`}
          >
            <p className="flex justify-between">
              <span>Item 1</span> <span>$XX</span>
            </p>
            <p className="flex justify-between">
              <span>Item 2</span> <span>$XX</span>
            </p>
          </div>
        )}
      </div>
      <div class="border-t border-[#60646C] border opacity-25 w-full"></div>
      <div
        className={`${styles.subheading2} font-semibold ${styles.flexBetween} my-4 w-full text-[#1C2024]`}
      >
        <p> Total payable </p>
        <p className=""> $XXX</p>
      </div>

      <div
        className={`${styles.paragraph4} font-semibold flex items-center text-[#299764]`}
      >
        <span className="mr-1">
          <img src={piggy} alt="" />
        </span>
        <span>You saved $300</span>
      </div>
    </div>
  );
};

export default RightDetails;

import React, { useState } from "react";
import styles from "../../../styles/style";
const InfoItem = ({ icon, text }) => (
  <div className={`${styles.paragraph} flex items-center font-semibold`}>
    <span className="mr-2">{icon}</span>
    <span>{text}</span>
  </div>
);

const RightDetails = () => {
  const [showPaymentSummary, setShowPaymentSummary] = useState(false);

  const ticketTypeInfo = { icon: "🔍", text: "Ticket Type" };
  const dateInfo = { icon: "🔍", text: "Date" };
  const timeInfo = { icon: "🔍", text: "Time" };
  const guestInfo = { icon: "🔍", text: "5 Guest" };

  const togglePaymentSummary = () => {
    setShowPaymentSummary(!showPaymentSummary);
  };

  return (
    <div className={`${styles.flexStart} flex-col`}>
      <div className="mb-4">
        <div className={`${styles.paragraph} flex items-center`}>
          <span className="mr-2">
            ⭐ <b>4.9</b> (4.5k)
          </span>
          <span className="text-gray-500">
            · <span> category</span>
          </span>
        </div>
      </div>
      <div className={`${styles.paragraph} mb-1 font-semibold`}>
        Amsterdam open boat canal cruise - Live Guide - from Anne Frank House
      </div>

      <div className={`${styles.flexBetween} my-4 flex-col `}>
        <InfoItem {...ticketTypeInfo} />
        <InfoItem {...dateInfo} />
        <div className={`${styles.paragraph2} flex items-center ml-8`}>
          <span>Date</span>
        </div>
        <InfoItem {...timeInfo} />
        <InfoItem {...guestInfo} />
      </div>
      <div class="border-t border-gray-300 border-dashed w-full"></div>

      <div className="my-4 w-full">
        <button
          onClick={togglePaymentSummary}
          className={`w-full flex justify-between ${styles.paragraph}`}
        >
          <div className="">View Payment Summary</div>
          <div>{showPaymentSummary ? "−" : "+"}</div>
        </button>
        {showPaymentSummary && (
          <div className={`w-full  ${styles.paragraph} mt-2`}>
            <p className="flex justify-between">
              <span>Item 1</span> <span>$XX</span>
            </p>
            <p className="flex justify-between">
              <span>Item 2</span> <span>$XX</span>
            </p>
          </div>
        )}
      </div>
      <div className="w-full">
        <hr />
      </div>
      <div className={`${styles.subheading} ${styles.flexBetween} my-4 w-full`}>
        <p> Total payable </p>
        <p className=""> $XXX</p>
      </div>

      <div
        className={`${styles.paragraph} flex items-center bg-green-300 rounded-3xl px-3 py-1 text-green-800`}
      >
        <span className="mr-1">💰</span>
        <span>You saved $300</span>
      </div>
    </div>
  );
};

export default RightDetails;

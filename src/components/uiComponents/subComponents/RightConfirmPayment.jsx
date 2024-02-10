import React from "react";
import { Button } from "../index";
import styles from "../../../styles/style";
import info from "../../../assets/info2.png";
import lock from "../../../assets/Lock.png";

const RightConfirmPayment = () => {
  return (
    <div className="space-y-2">
      <u className={`${styles.paragraph4} font-semibold flex mb-6`}>
        You will be charged in AED{" "}
        <span className="mt-[1.5px] ml-1">
          <img src={info} alt="icon" className="" />
        </span>
      </u>

      <div className="flex  ">
        <input
          type="checkbox"
          id="termsCheckbox"
          name="termsCheckbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
        />
        <label htmlFor="termsCheckbox" className="ml-2 text-xs text-gray-500">
          By clicking “confirm & pay”, you agree to Tickete’s
          <a
            href="/terms"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            {" "}
            general terms and conditions
          </a>
          and
          <a
            href="/cancellation-policy"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            {" "}
            cancellation policy
          </a>
          .
        </label>
      </div>
      <div className="pt-2">
        <Button iconSrc={lock} buttonText="Confirm & Pay" />
      </div>
    </div>
  );
};

export default RightConfirmPayment;

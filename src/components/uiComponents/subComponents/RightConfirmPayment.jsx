import React from "react";
import { Button } from "../index";

const RightConfirmPayment = () => {
  return (
    <div className="space-y-2">
      <p className="text-sm text-gray-600">
        You will be charged in AED{" "}
        <span className="inline-flex items-center">
          <img
            src="/path-to-info-icon.png"
            alt="icon"
            className="ml-1 w-4 h-4"
          />
        </span>
      </p>
      <div className="text-xs text-gray-500">
        <span className="font-semibold text-green-500">
          You saved <span className="text-green-600">price</span>
        </span>
      </div>
      <div className="flex items-start">
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
      <Button
        iconSrc=""
        buttonText="Confirm & Pay"
        className="bg-black text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 "
      />
    </div>
  );
};

export default RightConfirmPayment;

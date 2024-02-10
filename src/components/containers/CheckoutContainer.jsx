import React from "react";
import styles from "../../styles/style";
import { BorderBox, InputField, Button } from "../uiComponents/index";

const CheckoutContainer = () => {
  return (
    <>
      <div
        className={`${styles.paddingX} ${styles.marginX} ${styles.flexBetween} `}
      >
        <div className="left w-2/3 pr-10">
          <div className={`my-8`}>
            <p className={`${styles.subheading}`}>
              Select your mode of payment
            </p>
            <p className={`${styles.paragraph2}`}>
              Payments with Tickete are secure and encrypted.
            </p>
          </div>
          <BorderBox className={`border-stone-700`}>
            <div className={`${styles.flexBetween}`}>
              <p className={`${styles.paragraph}`}>Credit & debit card</p>
              <img src="" alt="icon" />
            </div>
            <div className="flex mt-3">
              <img src="" className="mr-2" alt="icon1" />
              <img src="" className="mx-2" alt="icon1" />
              <img src="" className="mx-2" alt="icon1" />
            </div>
            <div className="form">
              <div className={`flex my-2 ${styles.flexBetween}`}>
                <InputField placeholder="Name on card" className={`mr-2`} />
                <InputField placeholder="Card Number" icon="" />
              </div>
              <div className={`flex my-2 ${styles.flexBetween}`}>
                <InputField placeholder="Expiry Date" className={`mr-2`} />
                <InputField placeholder="CVV/CVC" icon="" />
              </div>
            </div>
            <div className="total">
              <div
                className={`${styles.subheading} ${styles.flexBetween} mt-4 w-full`}
              >
                <div className="">
                  <p> Total payable $XXX </p>
                </div>
                <div className={`${styles.paragraph} flex `}>
                  <p className="bg-green-300 rounded-3xl px-3 py-1 text-green-800">
                    <span className="mr-1">💰</span>
                    You saved $300
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                You will be charged in AED{" "}
                <span className="inline-flex items-center">
                  <img src="/path-to-info-icon.png" alt="icon" className="" />
                </span>
              </p>
            </div>
            <div className="flex items-start mt-6">
              <input
                type="checkbox"
                id="termsCheckbox"
                name="termsCheckbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 "
              />
              <label
                htmlFor="termsCheckbox"
                className="ml-2 text-xs text-gray-500"
              >
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
            <div className="w-56 mt-2">
              <Button
                iconSrc=""
                buttonText="Confirm & Pay"
                className="bg-black  text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 "
              />
            </div>
          </BorderBox>
          <BorderBox className={`mt-4`}>
            <div className={`${styles.flexBetween}`}>
              <div className={`flex`}>
                <img src="" alt="img" />
                <p className={`${styles.paragraph} ml-2`}>Comming Soon</p>
              </div>
              <img src="" alt="img" />
            </div>
          </BorderBox>
          <BorderBox className={`mt-4`}>
            <div className={`${styles.flexBetween}`}>
              <div className={`flex`}>
                <img src="" alt="img" />
                <p className={`${styles.paragraph} ml-2`}>Comming Soon</p>
              </div>
              <img src="" alt="img" />
            </div>
          </BorderBox>
          <div className={`my-8`}>
            <p className={`${styles.subheading} mb-4`}>Total Payable: $XXX</p>
            <BorderBox>
              <div className="flex flex-between">
                <div className="mr-2">
                  <img src="" alt="img" />
                </div>
                <div className="">
                  <p className={`${styles.paragraph}`}>
                    You will be charged in AED
                  </p>
                  <p className={`${styles.paragraph2}`}>
                    The price shown here is in US Dollar (USD) as per the
                    current conversion rate. You will be charged in United Arab
                    Emirates Dirham (AED).
                  </p>
                </div>
              </div>
            </BorderBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutContainer;

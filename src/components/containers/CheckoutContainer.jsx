import React from "react";
import styles from "../../styles/style";
import { BorderBox, InputField, Button } from "../uiComponents/index";
import card from "../../assets/card.png";
import radio from "../../assets/Radio.png";
import logo from "../../assets/logos.png";
import piggy2 from "../../assets/piggy2.png";
import info from "../../assets/info2.png";
import lock from "../../assets/Lock.png";
import gpay from "../../assets/gpay.png";
import radio2 from "../../assets/radio2.png";
import info3 from "../../assets/info3.png";

const CheckoutContainer = () => {
  return (
    <>
      <div
        className={`${styles.paddingX} ${styles.marginX} ${styles.flexBetween} `}
      >
        <div className="left md:w-2/3 md:pr-10">
          <div className={`mb-8`}>
            <p className={`${styles.subheading}`}>
              Select your mode of payment
            </p>
            <p className={`${styles.subheading2} mt-3`}>
              Payments with Tickete are secure and encrypted.
            </p>
          </div>
          <BorderBox className={`border-[#202327]`}>
            <div className="p-2">
              <div className={`${styles.flexBetween}`}>
                <p
                  className={`${styles.subheading2} font-semibold text-[#040505] flex`}
                >
                  <span>
                    <img src={card} alt="" className="mt-[2px] text-b" />
                  </span>
                  Credit & debit card
                </p>
                <img src={radio} alt="icon" />
              </div>
              <div className="flex mt-8">
                <img src={logo} className="mr-2" alt="icon1" />
              </div>
              <div className="form mt-8">
                <div
                  className={`flex my-2 ${styles.flexBetween} flex-col md:flex-row`}
                >
                  <InputField
                    placeholder="Name on card"
                    className={`md:mr-6 mb-4`}
                  />
                  <InputField placeholder="Card Number" icon={card} />
                </div>
                <div
                  className={`flex my-6 ${styles.flexBetween} flex-col md:flex-row`}
                >
                  <InputField
                    placeholder="Expiry Date"
                    className={`md:mr-6 mb-4`}
                  />
                  <InputField placeholder="CVV/CVC" icon="" />
                </div>
              </div>
              <div className="total">
                <div
                  className={`${styles.subheading} ${styles.flexBetween} md:flex-row flex-col-reverse md:mt-8 w-full`}
                >
                  <div
                    className={`${styles.subheading2} font-semibold md:my-0 my-4  text-[#151617]`}
                  >
                    <p> Total payable: $XXX </p>
                  </div>
                  <div
                    className={`${styles.paragraph4} md:mt-4 font-semibold flex items-center md:py-1 py-1 px-2 md:w-[20%] w-[54%] md:px-3 rounded-3xl bg-[#299764]`}
                  >
                    <span className="mr-1">
                      <img src={piggy2} alt="" />
                    </span>
                    <span className="text-white">You saved $300</span>
                  </div>
                </div>
                <u
                  className={`${styles.paragraph4} font-semibold opacity-80 flex`}
                >
                  You will be charged in AED{" "}
                  <span className="mt-[1.5px] ml-1">
                    <img src={info} alt="icon" className="" />
                  </span>
                </u>
              </div>
              <div className="flex items-start my-6">
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
              <div className="md:w-56 w-full mt-2">
                <Button iconSrc={lock} buttonText="Confirm & Pay" />
              </div>
            </div>
          </BorderBox>
          <BorderBox className={`mt-5 border-[#D3D4DB]`}>
            <div className={`${styles.flexBetween} py-2`}>
              <div className={`flex`}>
                <img src={gpay} alt="img" className="w-12" />
                <p
                  className={`${styles.subheading2} ml-2 font-semibold text-[#8B8D98]`}
                >
                  Comming Soon
                </p>
              </div>
              <img src={radio2} alt="img" />
            </div>
          </BorderBox>
          <BorderBox className={`mt-5 border-[#D3D4DB]`}>
            <div className={`${styles.flexBetween} py-2`}>
              <div className={`flex`}>
                <img src={gpay} alt="img" className="w-12" />
                <p
                  className={`${styles.subheading2} ml-2 font-semibold text-[#8B8D98]`}
                >
                  Comming Soon
                </p>
              </div>
              <img src={radio2} alt="img" />
            </div>
          </BorderBox>
          <div className={`mt-20 md:mb-24 mb-10`}>
            <p className={`${styles.subheading} mb-4`}>Total Payable: $XXX</p>
            <BorderBox className={`border-[#D3D4DB]`}>
              <div className="flex flex-between">
                <div className="mr-2 mt-1">
                  <img src={info3} alt="img" />
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

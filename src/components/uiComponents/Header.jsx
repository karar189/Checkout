import React from "react";
import styles from "../../styles/style";
import greyLock from "../../assets/greylock.svg";
import logo from "../../assets/logo.svg";
import help from "../../assets/help.svg";
import back from "../../assets/back.svg";

const Header = () => {
  return (
    <header className={` pt-8 `}>
      <div
        className={`${styles.flexBetween} ${styles.marginX} ${styles.paddingX} items-center `}
      >
        <div className="img">
          <img src={logo} alt="Logo" className="md:block hidden" />
          <img src={back} alt="Logo" className="block md:hidden" />
        </div>
        <p
          className={`${styles.subheading2} font-semibold flex justify-center -ml-40 md:-ml-32`}
        >
          {" "}
          <span>
            <img src={greyLock} alt="lock" className="mt-[1.5px] mr-2" />
          </span>{" "}
          Checkout
        </p>
        <p className={`${styles.subheading2} font-semibold flex -ml-32`}>
          {" "}
          <span>
            <img src={help} alt="lock" className="mt-[2.8px] mr-2" />
          </span>{" "}
          <span className="md:block hidden"> Help</span>
        </p>
      </div>
      <div className={`bg-black  text-center py-2 mt-4`}>
        <p className={`${styles.paragraph} text-white font-semibold`}>
          Holding your tickets for 30:00
        </p>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import styles from "../../styles/style";
import { InputField, SelectField } from "../uiComponents/index";
import countryOptions from "../../utils/mapdata";
import selectOptions from "../../utils/dataDummy";
import globe from "../../assets/sec1_globe.png";

const UserForm = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  return (
    <>
      <div className={`${styles.marginY} upperDetail`}>
        <div className={`my-8`}>
          <p className={`${styles.subheading}`}>Enter your details</p>
          <p className={`${styles.subheading2}`}>
            We'll be sending your tickets to the details below. Booking for a
            friend? Add their details.
          </p>
        </div>
        <div className="form">
          <InputField placeholder="Full Name *" />
          <div className={`${styles.flexBetween} my-2`}>
            <SelectField
              placeholder="Select Country Code"
              icon={globe}
              options={countryOptions}
              //   onChange={handleSelectChange}
              //   value={selectedValue}
              className="mr-2"
            />
            <InputField
              value={phoneNumber}
              type={"number"}
              pattern={"[0-9]*"}
              onChange={handlePhoneNumberChange}
              placeholder="Phone number *"
            />
          </div>
          <div className={`${styles.flexBetween}`}>
            <InputField placeholder="Email *" className={`mr-2`} />
            <InputField type={"email"} placeholder="Confirm Email *" />
          </div>
        </div>
      </div>
      <div className={`${styles.marginY} bottomDetail`}>
        <div className={`my-8`}>
          <p className={`${styles.subheading}`}>Additional information</p>
          <p className={`${styles.subheading2} `}>
            We need a few more details to complete your reservation.
          </p>
        </div>

        <div className="form">
          <div className={`${styles.flexBetween} my-2`}>
            <InputField placeholder="Country Code" className={`mr-2`} />
            <SelectField
              placeholder="Select *"
              icon={""}
              options={selectOptions}
              //   onChange={handleSelectChange}
              //   value={selectedValue}
              className=""
            />
          </div>
          <InputField placeholder="Multiselect *" />
        </div>
      </div>
    </>
  );
};

export default UserForm;

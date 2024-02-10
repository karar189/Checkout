import React, { useState } from "react";
import styles from "../../styles/style";
import { InputField, SelectField } from "../uiComponents/index";
import countryOptions from "../../utils/mapdata";
import selectOptions from "../../utils/dataDummy";
import globe from "../../assets/sec1_globe.png";

const UserForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    confirmEmail: "",
    otherInput: "",
    selectValue: "",
    multiselectValue: "",
  });

  const handleChange = (event, field) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleMultiselectChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setFormData({ ...formData, multiselectValue: selectedOptions });
  };

  return (
    <>
      <div className={`${styles.marginY} upperDetail`}>
        <div className={`my-8`}>
          <p className={`${styles.subheading}`}>Enter your details</p>
          <p className={`${styles.subheading2} mt-3`}>
            We'll be sending your tickets to the details below. Booking for a
            friend? Add their details.
          </p>
        </div>
        <div className="form">
          <InputField
            value={formData.fullName}
            onChange={(e) => handleChange(e, "fullName")}
            placeholder="Full Name*"
            required={true}
            className={`md:mb-0 mb-4`}
          />
          <div className={`flex md:flex-row flex-col md:my-8 `}>
            <SelectField
              placeholder="Select Country Code*"
              icon={globe}
              options={countryOptions}
            />
            <InputField
              value={formData.phoneNumber}
              type="number"
              pattern="[0-9]*"
              onChange={(e) => handleChange(e, "phoneNumber")}
              placeholder="Phone number*"
              required={true}
              className="md:ml-6 md:my-0 my-4"
            />
          </div>
          <div className={`${styles.flexBetween} md:flex-row flex-col`}>
            <InputField
              value={formData.email}
              onChange={(e) => handleChange(e, "email")}
              placeholder="Email*"
              required={true}
              className="mr-6 md:mb-0 mb-4"
            />
            <InputField
              value={formData.confirmEmail}
              type="email"
              onChange={(e) => handleChange(e, "confirmEmail")}
              placeholder="Confirm Email*"
              required={true}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.marginY} bottomDetail`}>
        <div className={`my-8`}>
          <p className={`${styles.subheading}`}>Additional information</p>
          <p className={`${styles.subheading2} mt-3`}>
            We need a few more details to complete your reservation.
          </p>
        </div>

        <div className="form">
          <div
            className={`${styles.flexBetween} md:flex-row flex-col md:mb-8 mb-4`}
          >
            <InputField
              placeholder="Other Input*"
              required={true}
              className={`md:mr-6 md:mb-0 mb-4`}
              value={formData.otherInput}
              onChange={(e) => handleChange(e, "otherInput")}
            />
            <SelectField
              placeholder="Select"
              icon=""
              options={selectOptions}
              className=""
              required={true}
              value={formData.selectValue}
              onChange={(e) => handleChange(e, "selectValue")}
            />
          </div>
          <SelectField
            placeholder="Select"
            icon=""
            options={selectOptions}
            className=""
            required={true}
            value={formData.multiselectValue}
            onChange={handleMultiselectChange}
          />
        </div>
      </div>
    </>
  );
};

export default UserForm;

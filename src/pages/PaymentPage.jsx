import React from "react";
import styles from "../styles/style";
import {
  CheckoutContainer,
  FAQContainer,
  PaymentContainer,
} from "../components/containers";

const PaymentPage = () => {
  return (
    <>
      <PaymentContainer />
      <CheckoutContainer />
      <FAQContainer />
    </>
  );
};

export default PaymentPage;

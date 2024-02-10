import React, { useEffect, useState } from "react";
import {
  CheckoutContainer,
  FAQContainer,
  PaymentContainer,
} from "../components/containers";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
const PaymentPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set the component to be visible after it has mounted
    setIsVisible(true);
  }, []);
  return (
    <>
      <div
        className={`transition-opacity duration-1000 ease-in ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <PaymentContainer />
      </div>

      <ScrollAnimation animateIn="fadeIn">
        <CheckoutContainer />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <FAQContainer />
      </ScrollAnimation>
    </>
  );
};

export default PaymentPage;

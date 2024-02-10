import React from "react";
import PaymentPage from "./pages/PaymentPage";
import { Footer, Header } from "./components/uiComponents";

const App = () => {
  return (
    <>
      <div className=" ">
        {" "}
        <Header />
        <div className="w-[1500px]">
          {" "}
          <PaymentPage />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;

import React from "react";
import PaymentPage from "./pages/PaymentPage";
import { Footer, Header } from "./components/uiComponents";

const App = () => {
  return (
    <>
      <div className="flex justify-center ">
        {" "}
        <div className="w-[1500px]">
          {" "}
          {/* <Header /> */}
          <PaymentPage />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default App;

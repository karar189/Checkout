import React from "react";
import PaymentPage from "./pages/PaymentPage";
import { Footer, Header } from "./components/uiComponents";

const App = () => {
  return (
    <>
      <Header />
      <div className="md:w-[1500px]">
        <PaymentPage />
      </div>
      <Footer />
    </>
  );
};

export default App;

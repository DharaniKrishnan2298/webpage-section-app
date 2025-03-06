import React from "react";
import CompanyLogos from "./components/TrustedCompanies";
import Testimonials from "./components/Testimonials";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <CompanyLogos />
      <Testimonials />
    </div>
  );
};

export default App;

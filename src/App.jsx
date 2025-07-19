import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import LandingPage from "./Landing_Page";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Termsandconditions from "./Components/Termsandconditions";
import SignUp from "./Components/SignUp";
import Signin from "./Components/Signin";

function App() {
  return (
    <div className="dark:bg-black bg-pale-white max-w-screen  ">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/Terms-and-Conditions" element={<Termsandconditions />} />
      </Routes>
    </div>
  );
}

export default App;

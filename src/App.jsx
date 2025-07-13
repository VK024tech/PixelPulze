import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import Home from "./Home";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Termsandconditions from "./Components/Termsandconditions";

function App() {
  return (
    <div className="dark:bg-black bg-pale-white max-w-screen  ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/Terms-and-Conditions" element={<Termsandconditions />} />
      </Routes>
    </div>
  );
}

export default App;

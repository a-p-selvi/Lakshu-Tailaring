import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Login from "../pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Services />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
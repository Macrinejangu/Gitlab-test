import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./Home";
import About from "./About";
import CrazyRoute from "./CrazyRoute";
import Page404 from "./404";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crazy/route/223311" element={<CrazyRoute />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
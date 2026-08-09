import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ColorsAndCircles from "./GithubProject/index";
import GithubProject from "./GithubProject/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GithubProject />
  </StrictMode>
);
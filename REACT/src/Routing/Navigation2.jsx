import { useNavigate, useLocation } from "react-router";

function Navigation2() {
  const navigate = useNavigate();

  const location = useLocation();

  console.log("current location->", location);

  const isActive = (btnLocation) => {
    //activer
    if (location.pathname === btnLocation) {
      return { backgroundColor: "pink", color: "gray" };
    }
    return {};
  };

  return (
    <div>
      <button style={isActive("/")} onClick={() => navigate("/")}>
        Home
      </button>
      <button style={isActive("/about")} onClick={() => navigate("/about")}>
        About
      </button>
      <button
        style={isActive("/crazy/route/223311")}
        onClick={() => navigate("/crazy/route/223311")}
      >
        Crazy Route
      </button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Navigation2;
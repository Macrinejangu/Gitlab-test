import logo from "./Assets/Amazon Logo.jpg";

function Navigation() {
  return (
    <nav className="nav">
      <img
        className="nav-logo"
        src={logo}
        alt="Amazon Logo"
      />

      <input
        className="nav-search"
        type="text"
        placeholder="Search Amazon"
      />

      <button className="nav-searchBtn">
        🔍
      </button>
    </nav>
  );
}

export default Navigation;
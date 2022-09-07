import React from "react";
// import ToggleBtn from "../toggleBtn/ToggleBtn";

const NavBar = ({ isDark, setIsDark }) => {
  return (
    <div>
      <a className="navbar-brand" href="/home">Boutique</a>
      <a className="navbar-brand" href="/home">Produits</a>
      {/* <ToggleBtn isDark={isDark} setIsDark={setIsDark} /> */}
      <div className="form-check form-switch">
        <input
          name="input"
          onChange={() => {
            setIsDark(!isDark);
          }}
          checked={isDark}
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
      </div>
    </div>
  );
};

export default NavBar;

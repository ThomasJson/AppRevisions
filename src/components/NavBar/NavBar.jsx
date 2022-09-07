import React from "react";

const NavBar = ({ isDark, setIsDark, setCurrentPage }) => {
  return (
    <div>
      <button
        className="navbar-brand"
        onClick={() => {
          setCurrentPage("HomeScreen");
        }}
      >
        Boutique
      </button>
      <button
        className="navbar-brand"
        onClick={() => {
          setCurrentPage("ProductScreen");
        }}
      >
        Produits
      </button>

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

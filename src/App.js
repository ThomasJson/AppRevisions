import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import HomeScreen from "./components/HomeScreen/HomeScreen";
import ContactForm from "./components/ContactForm/ContactForm";
import { useState } from "react";
// import SwitchBtn from "./components/Switch/SwitchBtn";

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark((state) => !state);
  };

  return (
    <>
      <div className={isDark === false ? "App" : "App bg-dark text-white"}>
        {/* <SwitchBtn /> */}
        <div className="form-check form-switch">
          <input
            name="input"
            onChange={handleClick}
            checked={isDark}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
        <HomeScreen />
        <ContactForm />
      </div>
    </>
  );
}

export default App;

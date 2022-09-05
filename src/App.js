import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import HomeScreen from "./components/HomeScreen/HomeScreen";
import ContactForm from "./components/ContactForm/ContactForm";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark((state) => !state);
  };

  return (
    <>
      <div className={isDark === false ? "App" : "App bg-dark text-white"}>
        <button id="btn" onClick={handleClick}>
          darkMode
        </button>
        <HomeScreen />
        <ContactForm />
      </div>
    </>
  );
}

export default App;

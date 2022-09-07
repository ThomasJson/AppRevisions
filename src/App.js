import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import HomeScreen from "./components/HomeScreen/HomeScreen";
import ContactForm from "./components/ContactForm/ContactForm";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <div className={isDark === false ? "App" : "App bg-dark text-white"}>
        <NavBar isDark={isDark} setIsDark={setIsDark} />
        <HomeScreen />
        <ContactForm />
      </div>
    </>
  );
}

export default App;

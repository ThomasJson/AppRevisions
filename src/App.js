import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import HomeScreen from "./components/HomeScreen/HomeScreen";
import ContactForm from "./components/ContactForm/ContactForm";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import ProductScreen from "./components/ProductScreen/ProductScreen";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentPage, setCurrentPage] = useState("HomeScreen");

  const chargePage = () => {
    if (currentPage === "HomeScreen") {
      return <HomeScreen />;
    } else if (currentPage === "ProductScreen") {
      return <ProductScreen />;
    }
    return <span>Not found</span>;
  };

  return (
    <>
      <div className={isDark === false ? "App" : "App bg-dark text-white"}>
        <NavBar
          isDark={isDark}
          setIsDark={setIsDark}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        {chargePage()}

        <ContactForm />
      </div>
    </>
  );
}

export default App;

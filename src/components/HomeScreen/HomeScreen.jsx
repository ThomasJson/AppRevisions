import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

import "./homeScreen.css";

const HomeScreen = () => {


  return (
    <>
      <div>
        <h1>La Boutique De Laurent Bedu</h1>
        <CategoryCard title={"Johnny"} description={"L'homme aux 1000 métiers"} image={"./assets/images/johnny.jpeg"}/>
        <CategoryCard title={"Andréa"} description={"Andréa ' Energy ' Botez"} image={"./assets/images/botez.jpg"}/>
      </div>
    </>
  );
};

export default HomeScreen;

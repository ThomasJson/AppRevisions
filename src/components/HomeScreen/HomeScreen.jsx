import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

import "./homeScreen.css";

const HomeScreen = () => {
  const cardCategories = [
    {
      id: "1",
      title: "Terreur sous les tropiques",
      description: "something",
      image: "./assets/images/johnny.jpeg",
    },
    {
      id: "2",
      title: "Les conquérants",
      description: "something",
      image: "./assets/images/botez.jpg",
    },
    {
      id: "3",
      title: "Massacre à la sulfateuse",
      description: "something",
      image: "./assets/images/couilles.jpg",
    },
    {
      id: "4",
      title: `L'apprentie sorcière`,
      description: "something",
      image: "./assets/images/sorciere.jpg",
    },
  ];

  return (
    <>
      <div className="col">
        <h1>La Boutique De Laurent Bedu</h1>

        <div className="row">
          {cardCategories.map((card, index) => (
            <div className="carD" key={index}>
              <CategoryCard
                card={card}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;

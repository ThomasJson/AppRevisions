import React from "react";
import "./categoryCard.css";

const CategoryCard = ({title, description, image}) => {
  return (
    <div>
      <div className="card">
        <img className="card-img-top" src={image} alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button href="#" className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

import React from "react";
import "./categoryCard.css";

const CategoryCard = () => {
  return (
    <div>
      <div className="card">
        <img className="card-img-top" src="https://picsum.photos/id/237/200/300" alt="Card" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">content.</p>
          <button href="#" className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

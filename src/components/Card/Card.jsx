import React from "react";
import { Link } from "react-router-dom";

const Card = (cardInfo) => (
  <div className="card my-2 mx-2" style={{ width: "18rem" }}>
    <img src={cardInfo.urlToImage} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{cardInfo.title}</h5>
      <p className="card-text">{cardInfo.description}</p>
      <Link className="btn btn-primary" to="/details" state={cardInfo}>
        Read more
      </Link>
      <div></div>
    </div>
  </div>
);

export default Card;

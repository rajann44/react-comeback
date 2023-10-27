import React from "react";

const Card = (cardInfo) => (
  <div className="card my-2 mx-2" style={{ width: "18rem" }}>
    <img src={cardInfo.urlToImage} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{cardInfo.title}</h5>
      <p className="card-text">{cardInfo.description}</p>
      <a
        href={cardInfo.url}
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </a>
    </div>
  </div>
);

export default Card;

import React from "react";

const Card = ({ key, imageSrc, title, text }) => (
  <div key={key} class="card" style={{ width: "18rem" }}>
    <img src={imageSrc} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{text}</p>
      <a href="#" class="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);

export default Card;

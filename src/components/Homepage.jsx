import React from "react";
import Card from "./Card";

const Homepage = () => {
  const cardData = [
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/f/fb/City_Hall_Subway_station.jpg",
      title: "Card title 1",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/f/fb/City_Hall_Subway_station.jpg",
      title: "Card title 2",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    // Add more objects for additional cards if needed
  ];

  return (
    <div className="row">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Homepage;

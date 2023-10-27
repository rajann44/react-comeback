import React from "react";
import Card from "./Card";

const CardList = ({ cardInfoList }) => {
  return (
    <div className="row">
      {cardInfoList.map((cardInfo, index) => (
        <Card key={index} cardInfo={cardInfo} />
      ))}
    </div>
  );
};

export default CardList;

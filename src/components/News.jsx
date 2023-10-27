import React, { useEffect, useState } from "react";
import Card from "./card/Card";
import fetchData from "../utils/api";

const News = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetchData(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f64eed1e539a4c1f9a02b51381e795ad"
    )
      .then((data) => setCardData(data.articles))
      .catch((error) => console.error("Error fetching data:", error));
    console.log("I ran once");
  }, []);

  return (
    <div className="row">
      {cardData.slice(0, 8).map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default News;

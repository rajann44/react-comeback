import React from "react";
import { Link, useLocation } from "react-router-dom";

const CardDetails = () => {
  const location = useLocation();
  const propsData = location.state;

  return (
    <div className="card text-center">
      <div className="card-header">{propsData.source.name}</div>
      <div className="card-body">
        <h5 className="card-title">{propsData.title}</h5>
        <img
          src={propsData.urlToImage}
          classNameName="card-img-top"
          alt="..."
          style={{ maxWidth: "500px" }}
        />
        <p className="card-text">{propsData.content}</p>
        <Link to={propsData.url} className="btn btn-primary">
          Go to News Site
        </Link>
      </div>
      <div className="card-footer text-body-secondary">
        Published at: {propsData.publishedAt}
      </div>
    </div>
  );
};

export default CardDetails;

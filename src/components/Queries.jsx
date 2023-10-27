import React, { useState } from "react";

const Queries = () => {
  const queries = [
    { des: "Hello1", more: "Hey Yo1" },
    { des: "Hello2", more: "Hey Yo2" },
    { des: "Hello3", more: "Hey Yo3" },
  ];

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {queries.map((query, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                activeAccordion === index ? "" : "collapsed"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              onClick={() => handleAccordionToggle(index)}
            >
              {query.des}
            </button>
          </h2>
          <div
            id={`flush-collapse-${index}`}
            className={`accordion-collapse collapse ${
              activeAccordion === index ? "show" : ""
            }`}
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">{query.more}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Queries;

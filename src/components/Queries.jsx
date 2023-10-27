import React, { useContext, useState } from "react";
import { ContactContext } from "../context/ContactContext";

const Queries = () => {
  const { contactList } = useContext(ContactContext);

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {contactList.map((query, index) => (
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
              {query.email}
            </button>
          </h2>
          <div
            id={`flush-collapse-${index}`}
            className={`accordion-collapse collapse ${
              activeAccordion === index ? "show" : ""
            }`}
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">{query.password}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Queries;

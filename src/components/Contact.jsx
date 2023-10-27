import React, { useState, useContext } from "react";
import { ContactContext } from "../context/ContactContext";

const Contact = () => {
  const { setContactList } = useContext(ContactContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    setContactList((prevList) => [...prevList, formData]);
    alert(`Submitted: ${formData.email} And Password: ${formData.password}`);
  };

  return (
    <form className="container-sm my-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email in correct format using @"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Contact;

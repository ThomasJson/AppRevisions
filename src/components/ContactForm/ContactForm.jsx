import React from "react";
import "./contactForm.css";

const ContactForm = () => {

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    // const jsonData2 = Object.fromEntries(new FormData(evt.target));
    console.log(jsonData);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input
              name="pass"
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            name="adress"
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input
              name="city"
              type="text"
              className="form-control"
              id="inputCity"
            />
          </div>
        </div>
        <button type="submit" value="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

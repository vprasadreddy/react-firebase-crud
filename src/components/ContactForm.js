import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactForm(props) {
  const initialFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: ""
  };
  var [values, setValues] = useState(initialFieldValues);
  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialFieldValues });
    } else {
      setValues({ ...props.contacts[props.currentId] });
    }
  }, [props.currentId, props.contacts]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addorEdit(values);
  };

  const resetForm = () => {
    setValues({ ...initialFieldValues });
    props.resetCurrentItemId();
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" style={{ width: "40px" }}>
            <FontAwesomeIcon icon="user" />
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="fullName"
          aria-label="fullName"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
          aria-describedby="addon-wrapping"
          required
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" style={{ width: "40px" }}>
            <FontAwesomeIcon icon="mobile" />
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="mobile"
          aria-label="mobile"
          name="mobile"
          value={values.mobile}
          onChange={handleInputChange}
          aria-describedby="addon-wrapping"
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" style={{ width: "40px" }}>
            <FontAwesomeIcon icon="envelope" />
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="email"
          aria-label="email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          aria-describedby="addon-wrapping"
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" style={{ width: "40px" }}>
            <FontAwesomeIcon icon="address-card" />
          </span>
        </div>
        <textarea
          type="text"
          className="form-control"
          placeholder="address"
          aria-label="address"
          name="address"
          value={values.address}
          onChange={handleInputChange}
          style={{ resize: "none" }}
          aria-describedby="addon-wrapping"
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="submit"
          value={props.currentId == "" ? "Submit" : "Save"}
          className="btn btn-primary btn-block"
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="button"
          value="reset"
          className="btn btn-secondary btn-block"
          onClick={resetForm}
        />
      </div>
    </form>
  );
}

export default ContactForm;

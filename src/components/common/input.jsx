import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input {...rest} id={name} name={name} className="form-control" />
      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  );
};

export default Input;

import React from "react";

const Input = ({ name, label, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        className="form-control"
        value={value}
        onChange={onChange}
      />
      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  );
};

export default Input;

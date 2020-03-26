import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movies Form - {match.params.id}</h1>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;

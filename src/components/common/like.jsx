import React from "react";

const Like = props => {
  const { liked, onClick } = props;

  let classes = "fa fa-heart";
  classes += !liked ? "-o" : "";

  return (
    <i
      className={classes}
      arial-hidden="true"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;

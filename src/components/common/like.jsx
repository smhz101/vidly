import React from "react";

const Like = props => {
  const { liked, onClick } = props;

  let classes = "clickable fa fa-heart";
  classes += !liked ? "-o" : "";

  return <i className={classes} arial-hidden="true" onClick={onClick} />;
};

export default Like;

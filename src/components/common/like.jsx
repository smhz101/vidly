import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "clickable fa fa-heart";
  classes += !liked ? "-o" : "";

  return <i className={classes} arial-hidden="true" onClick={onClick} />;
};

export default Like;

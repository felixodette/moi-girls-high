import React from "react";

const ServiceDetailsContent = ({ data }) => {
  const { title, content } = data;

  if(!data){
    return<p>Data Not Found</p>
  }


  return (
    <div className="serviceArea">
      <h2>{title}</h2>
      <div style={{ whiteSpace: "pre-line" }}>{content}</div>
    </div>
  );
};

export default ServiceDetailsContent;

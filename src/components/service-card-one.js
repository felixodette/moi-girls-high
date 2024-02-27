import React from "react";
import { Link } from "gatsby";

const ServiceCardOne = ({ data }) => {
  const { title, text, iconName, url } = data;
  const serviceDetailsUrl = `/service-details?url=${url}`;
  return (
    <div className="icon_box_2 text-center">
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="iconWrap">
        <i className={iconName}></i>
      </div>
      <Link to={serviceDetailsUrl}>discover more</Link>
    </div>
  );
};

export default ServiceCardOne;

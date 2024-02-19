import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.311308943157!2d35.273239996055835!3d0.5173813479102184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101a2aba61863%3A0x865aef74867aa6a0!2sMoi%20Girls&#39;%20High%20School%20-%20Eldoret!5e0!3m2!1sen!2ske!4v1704830884115!5m2!1sen!2ske"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;

import React from "react";
import "./language.scss";

const Languageoption = () => {
  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    localStorage.setItem("i18nextLng", selectedLanguage);
    window.location.reload();
  };

  return (
    <select
      style={{ cursor: "pointer", border: "none" }}
      onChange={handleChange}
      value={localStorage.getItem("i18nextLng")}
    >
      <option style={{ cursor: "pointer" }} value={"az"}>Aze</option>
      <option style={{ cursor: "pointer" }} value={"en"}>Eng</option>
      <option style={{ cursor: "pointer" }} value={"ru"}>Ru</option>
    </select>
  );
};

export default Languageoption;

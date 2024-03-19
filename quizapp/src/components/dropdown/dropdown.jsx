import React, { useState } from "react";
import "./dropdown.css";

const Dropdown = ({ data, setDifficultyChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <select
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
        onChange={(e) => setDifficultyChange(e.target.value)}
        name=""
        id=""
      >
        <option disabled selected>
          Zorluk Seviyesini Seçiniz
        </option>
        {data.map((dt, i) => (
          <option key={i} value={dt}>
            {dt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

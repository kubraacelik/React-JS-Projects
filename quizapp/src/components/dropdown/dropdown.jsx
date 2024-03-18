import React from "react";
import './dropdown.css'

const dropdown = ({ data, setDifficultyChange }) => {
  return (
    <div className="dropdown">
      <select
        onChange={(e) => setDifficultyChange(e.target.value)}
        name=""
        id=""
      >
        {data.map((dt, i) => (
          <option value={dt}>{dt}</option>
        ))}
      </select>
    </div>
  );
};

export default dropdown;

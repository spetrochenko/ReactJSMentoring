import React from "react";

export interface DropdownProps {
  values: string[];
}

const Dropdown = (props: DropdownProps) => {
  return (
    <select className="dropdown">
      {props.values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

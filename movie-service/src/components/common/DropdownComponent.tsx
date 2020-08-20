import React from "react";

export interface DropdownComponentProps {
  values: string[];
}

const DropdownComponent = (props: DropdownComponentProps) => {
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

export default DropdownComponent;

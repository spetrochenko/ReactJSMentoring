import React, { ChangeEvent } from "react";

export interface DropdownProps {
  values: string[];
  className?: string;
  selectedValue?: string;
  isMultiple?: boolean;
  onDropdownValueChanged?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = (props: DropdownProps) => {
  return (
    <select
      className={props.className ? `${props.className}` : "dropdown"}
      onChange={props.onDropdownValueChanged}
    >
      {props.values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

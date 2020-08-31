import React from "react";

export interface DropdownProps {
  values: string[];
  className?: string;
  selectedValue?: string;
  isMultiple?: boolean;
}

const Dropdown = (props: DropdownProps) => {
  return (
    <select className={props.className ? `${props.className}` : "dropdown"}>
      {props.values.map((value) => (
        <option
          {...((props.selectedValue && props.selectedValue === value) ??
            "selected")}
          key={value}
          value={value}
        >
          {value}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

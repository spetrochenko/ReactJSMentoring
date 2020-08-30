import React from "react";

export interface EditTextProps {
  placeholder?: string;
  className?: string;
}

const EditText = (props: EditTextProps) => {
  return (
    <>
      <input
        className={props.className !== undefined ? props.className : "editText"}
        type="text"
        placeholder={props.placeholder}
      />
    </>
  );
};

export default EditText;

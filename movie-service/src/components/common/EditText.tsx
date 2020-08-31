import React from "react";

export interface EditTextProps {
  placeholder?: string;
  className?: string;
  text?: string;
}

const EditText = (props: EditTextProps) => {
  return (
    <>
      <input
        className={props.className !== undefined ? props.className : "editText"}
        type="text"
        placeholder={props.placeholder}
        defaultValue={props.text}
      />
    </>
  );
};

export default EditText;

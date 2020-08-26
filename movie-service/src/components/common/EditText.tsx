import React from "react";

export interface EditTextProps {
  placeholder?: string;
}

const EditText = (props: EditTextProps) => {
  return (
    <>
      <input className="editText" type="text" placeholder={props.placeholder} />
    </>
  );
};

export default EditText;

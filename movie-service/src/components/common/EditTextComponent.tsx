import React from "react";

export interface EditTextComponentProps {
  placeholder?: string;
}

const EditTextComponent = (props: EditTextComponentProps) => {
  return (
    <>
      <input className="editText" type="text" placeholder={props.placeholder} />
    </>
  );
};

export default EditTextComponent;

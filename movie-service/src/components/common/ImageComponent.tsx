import React from "react";
import TextComponent from "./TextComponent";

export interface ImageComponentProps {
  url?: string;
  className?: string;
}

const ImageComponent = (props: ImageComponentProps) => {
  const renderDefaultImage = () => {
    return (
      <div className="defaultImage">
        <TextComponent text="No Image" />
      </div>
    );
  };

  const renderImage = () => {
    return (
      <div className={props.className}>
        <img src={props.url}></img>
      </div>
    );
  };

  return <>{props.url == null ? renderDefaultImage() : renderImage()}</>;
};

export default ImageComponent;

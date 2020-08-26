import React from "react";
import Text from "./Text";

export interface ImageProps {
  url?: string;
  className?: string;
}

const Image = (props: ImageProps) => {
  const renderDefaultImage = () => {
    return (
      <div className="defaultImage">
        <Text text="No Image" />
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

export default Image;

import React from "react";
import TextComponent from "../common/TextComponent";

const LogoComponent = () => {
  return (
    <>
      <TextComponent text="netflix" className="logoText bold" />
      <TextComponent text="roulette" className="logoText" />
    </>
  );
};

export default LogoComponent;

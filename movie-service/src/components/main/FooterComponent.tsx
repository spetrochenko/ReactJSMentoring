import React from "react";
import TextComponent from "../common/TextComponent";

const FooterComponent = () => {
  return (
    <div className="footer">
      <TextComponent text="netflix" className="footerText bold" />
      <TextComponent text="roulette" className="footerText" />
    </div>
  );
};

export default FooterComponent;

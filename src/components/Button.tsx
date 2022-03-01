import React from "react";
import "./Button.scss";

type ButtonClass = "purple" | "cyan" | "purple-text";

type ButtonProps = {
  text: string;
  color: ButtonClass;
};

const Button = (props: ButtonProps) => {
  const { text, color } = props;

  return (
    <button type="button" className={color}>
      {text}
    </button>
  );
};

export { Button };

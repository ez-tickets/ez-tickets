import React, { Fragment } from "react";

type ButtonProps = {
  name: string;
  style: string;
  execute?: () => void;
  disabled?: boolean;
};

function Button({ name, style, execute, disabled }: ButtonProps) {
  return (
    <button
      type={"button"}
      className={style}
      disabled={disabled}
      onClick={execute}
    >
      {name}
    </button>
  );
}

export default Button;

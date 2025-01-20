import type { JSX } from "react";

type HeaderProps = {
  element: JSX.Element;
  style: string;
};

function Header({ element, style }: HeaderProps) {
  return <div className={style}>{element}</div>;
}

export default Header;

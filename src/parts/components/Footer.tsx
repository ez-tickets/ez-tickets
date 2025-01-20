import type { JSX } from "react";

type FooterProps = {
  element: JSX.Element;
  style: string;
};

function Footer({ element, style }: FooterProps) {
  return <div className={style}>{element}</div>;
}

export default Footer;

import type { JSX } from "react";

type ContentsProps = {
  element: JSX.Element;
  style: string;
};

function Contents({ element, style }: ContentsProps) {
  return <div className={style}>{element}</div>;
}

export default Contents;

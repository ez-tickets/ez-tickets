import { useSlideAnimeStore } from "@/store/AnimationStore.ts";
import type { JSX } from "react";

type AnimationFrameProps = {
  element: JSX.Element;
};

function AnimationFrame({ element }: AnimationFrameProps) {
  const { animation } = useSlideAnimeStore();

  return <div className={animation}>{element}</div>;
}

export default AnimationFrame;

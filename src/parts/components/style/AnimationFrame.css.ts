import { keyframes, style } from "@vanilla-extract/css";

const topIn = keyframes({
  from: { transform: "translateY(-100%)", opacity: 0 },
  to: { transform: "translateY(0)", opacity: 1 },
});

const bottomIn = keyframes({
  from: { transform: "translateY(100%)", opacity: 0 },
  to: { transform: "translateY(0)", opacity: 1 },
});

const rightIn = keyframes({
  from: { transform: "translateX(100%)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
});

const leftIn = keyframes({
  from: { transform: "translateX(-100%)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
});

export const slideTop = style({
  animation: `${topIn} 0.5s ease-in-out`,
  position: "absolute",
  width: "100%",
  animationDuration: "0.4s",
});

export const slideBottom = style({
  animation: `${bottomIn} 0.5s ease-in-out`,
  position: "absolute",
  width: "100%",
  animationDuration: "0.4s",
});

export const slideRight = style({
  animation: `${rightIn} 0.5s ease-in-out`,
  position: "absolute",
  width: "100%",
  animationDuration: "0.4s",
});

export const slideLeft = style({
  animation: `${leftIn} 0.5s ease-in-out`,
  position: "absolute",
  width: "100%",
  animationDuration: "0.4s",
});

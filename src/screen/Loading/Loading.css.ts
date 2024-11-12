import { keyframes, style } from "@vanilla-extract/css";

export const loadingStyle = {
  screen: style({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }),
};

const blink = keyframes({
  "0%": { opacity: 1 },
  "50%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const loadingAnime = style({
  animation: `${blink} 1.5s ease-in-out infinite`,
});

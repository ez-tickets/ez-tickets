import { style } from "@vanilla-extract/css";

export const screenFrameStyle = {
  screen: style({
    display: "flex",
    flexDirection: "column",
    height: "100svh",
    overflow: "hidden",
  }),
};

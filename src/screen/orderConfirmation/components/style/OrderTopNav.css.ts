import { style } from "@vanilla-extract/css";

export const orderTopNavStyle = {
  backImg: style({
    position: "absolute",
    top: "50%",
    left: 0,
    transform: "translate(0%, -50%)",
    width: "2.5rem",
    height: "100%",
    strokeWidth: 2,
  }),

  menuTitle: style({
    fontSize: "1.25rem",
    textAlign: "center",
  }),
};

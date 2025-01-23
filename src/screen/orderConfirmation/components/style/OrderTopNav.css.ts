import { style } from "@vanilla-extract/css";

export const orderTopNavStyle = {
  backImg: style({
    position: "absolute",
    top: "52%",
    left: "1%",
    transform: "translate(-1%, -50%)",
    strokeWidth: 3,
  }),

  menuTitle: style({
    textAlign: "center",
    fontSize: "24px",
  }),
};

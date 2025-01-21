import { style } from "@vanilla-extract/css";

export const orderTopNavStyle = {
  topBar: style({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "55px",
    zIndex: 1000,
    boxShadow: "0px 2px 5px gray",
  }),

  backImg: style({
    position: "absolute",
    top: "50%",
    left: "2%",
    transform: "translate(0, -50%)",
    strokeWidth: 3,
  }),

  menuTitle: style({
    textAlign: "center",
    fontSize: "24px",
  }),
};

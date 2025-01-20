import { style } from "@vanilla-extract/css";

export const navBarStyle = {
  navBar: style({
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "55px",
    zIndex: 1000,
    boxShadow: "0px 2px 5px gray",
  }),

  icon: style({
    position: "absolute",
    top: "50%",
    left: "1%",
    width: "40px",
    height: "40px",
    strokeWidth: 1.5,
    transform: "translate(0, -50%)",
  }),

  name: style({
    textAlign: "center",
    fontSize: "1.5rem",
  }),
};

import { style } from "@vanilla-extract/css";

export const navBarStyle = {
  icon: style({
    position: "absolute",
    top: "52%",
    left: "1%",
    width: "40px",
    height: "40px",
    strokeWidth: 1.5,
    transform: "translate(-1%, -50%)",
  }),

  name: style({
    width: "70%",
    fontSize: "1.5rem",
    textAlign: "center",
    backgroundColor: "white",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  }),
};

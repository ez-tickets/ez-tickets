import { style } from "@vanilla-extract/css";

export const detailTopNavStyle = {
  icon: style({
    position: "absolute",
    top: "52%",
    left: "1%",
    width: "2.5rem",
    height: "2.5rem",
    strokeWidth: "0.09375rem",
    transform: "translate(-1%, -50%)",
  }),

  name: style({
    width: "70%",
    fontSize: "1.25rem",
    textAlign: "center",
    backgroundColor: "white",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  }),
};

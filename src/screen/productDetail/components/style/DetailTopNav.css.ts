import { style } from "@vanilla-extract/css";

export const detailTopNavStyle = {
  icon: style({
    position: "absolute",
    top: "50%",
    left: 0,
    width: "2.5rem",
    height: "100%",
    strokeWidth: "0.09375rem",
    transform: "translate(0%, -50%)",
  }),

  name: style({
    width: "300px",
    fontSize: "1.25rem",
    textAlign: "center",
    backgroundColor: "white",
    textOverflow: "aaa",
    whiteSpace: "nowrap",
    overflow: "hidden",
  }),
};

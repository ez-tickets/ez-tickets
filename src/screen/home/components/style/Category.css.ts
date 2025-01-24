import { style } from "@vanilla-extract/css";

export const categoryStyle = {
  category: style({
    height: "100%",
    display: "flex",
    padding: "1rem",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
  }),

  selected: style({
    height: "100%",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "red",
    whiteSpace: "nowrap",
    borderBottom: "0.3125rem solid gold",
    transition: "0.3s",
  }),
};

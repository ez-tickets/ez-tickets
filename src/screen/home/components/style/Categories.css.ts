import { style } from "@vanilla-extract/css";

export const categoriesStyle = {
  categories: style({
    height: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: "0.875rem",
    overflow: "scroll",
    "::-webkit-scrollbar": {
      display: "none",
    },
  }),
};

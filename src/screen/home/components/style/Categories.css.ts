import { style } from "@vanilla-extract/css";

export const categoriesStyle = {
  categories: style({
    height: "7svh",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    boxShadow: "0px 2px 5px gray",
    overflowX: "scroll",
  }),
};

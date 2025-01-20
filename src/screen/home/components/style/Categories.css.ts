import { style } from "@vanilla-extract/css";

export const categoriesStyle = {
  categories: style({
    display: "flex",
    alignItems: "center",
    fontSize: "10px",
    padding: "10px",
    boxShadow: "0px 2px 5px gray",
    overflowX: "scroll",
  }),
};

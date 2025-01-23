import { style } from "@vanilla-extract/css";

export const productsStyle = {
  prodsContainer: style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(9.375rem, 1fr))", // 150px converted to rem
    placeItems: "center",
    gap: "0 0.9375rem",
  }),
};

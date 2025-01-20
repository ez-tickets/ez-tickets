import { style } from "@vanilla-extract/css";

export const productsStyle = {
  prodsContainer: style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr));",
    placeItems: "center",
    gap: "0 15px",
    scrollSnapType: "y mandatory",
    scrollbarWidth: "thin",
  }),
};

import { style } from "@vanilla-extract/css";

export const orderListStyle = {
  main: style({
    marginBottom: "60px",
    overflowY: "scroll",
    padding: "20px",
    paddingBottom: "50px",
  }),

  orderContainer: style({
    overflowY: "scroll",
  }),
};

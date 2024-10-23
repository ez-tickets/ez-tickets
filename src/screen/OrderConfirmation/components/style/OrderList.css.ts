import { style } from "@vanilla-extract/css";

export const orderListStyle = {
  main: style({
    flex: "1",
    marginBottom: "60px",
    overflowY: "auto",
    padding: "20px",
    paddingBottom: "50px",
  }),

  orderContainer: style({
    flex: "1",
    overflowY: "auto",
  }),
};

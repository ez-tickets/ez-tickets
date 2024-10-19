import { style } from "@vanilla-extract/css";

export const selectedOptionsViewStyle = {
  container: style({
    padding: "0 0 50px 0",
  }),

  optionItem: style({
    position: "relative",
    padding: "10px 0",
    borderTop: "1px solid gainsboro",
  }),

  priceText: style({
    fontSize: "12px",
  }),

  amountText: style({
    position: "absolute",
    top: "50%",
    right: "10%",
    transform: "translate(0, -50%)",
  }),

  deleteButton: style({
    position: "absolute",
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
  }),

  deleteIcon: style({
    color: "red",
  }),
};

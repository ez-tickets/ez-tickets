import { style } from "@vanilla-extract/css";

export const orderAmountStyle = {
  amountContainer: style({
    width: "100%",
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),

  text: style({
    marginRight: "0.75rem",
  }),

  decrementButton: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "0.625rem",
    color: "#565656",
  }),

  limitDecrementButton: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "0.625rem",
    color: "lightgray",
  }),

  incrementButton: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0.625rem",
    color: "#565656",
  }),

  limitIncrementButton: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0.625rem",
    color: "lightgray",
  }),

  amount: style({
    width: "1.875rem",
    height: "1.875rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid gray",
    borderRadius: "0.3125rem",
  }),

  total: style({
    width: "7.5rem",
    marginLeft: "4rem",
    fontSize: "1.5rem",
    textAlign: "right",
    ":after": {
      content: "円",
    },
  }),
};

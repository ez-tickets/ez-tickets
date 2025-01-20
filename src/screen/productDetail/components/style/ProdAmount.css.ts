import { style } from "@vanilla-extract/css";

export const prodAmountStyle = {
  amountContainer: style({
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingBottom: "14px",
  }),

  text: style({
    marginRight: "1.2rem",
  }),

  decrementButton: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
    color: "#565656",
  }),

  limitDecrementButton: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
    color: "lightgray",
  }),

  incrementButton: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px",
    color: "#565656",
  }),

  limitIncrementButton: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px",
    color: "lightgray",
  }),

  amount: style({
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid gray",
    borderRadius: "5px",
  }),

  total: style({
    width: "120px",
    marginLeft: "4rem",
    fontSize: "1.5rem",
    textAlign: "right",
    ":after": {
      content: "円",
    },
  }),
};

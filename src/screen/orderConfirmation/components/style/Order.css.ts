import { style } from "@vanilla-extract/css";

export const orderStyle = {
  order: style({
    position: "relative",
    marginBottom: "1.875rem",
    padding: "0.625rem",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "0.3125rem",
    boxShadow: "0.3125rem 0.1875rem 0.625rem rgba(0,0,0,0.4)",
  }),

  orderProduct: style({
    position: "relative",
    width: "100%",
  }),

  name: style({
    width: "90%",
    fontSize: "1.25rem",
    padding: "0 0.625rem",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  }),

  priceViewContainer: style({
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 0",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
  }),

  price: style({
    width: "50%",
    padding: "0 0.625rem",
  }),

  amount: style({
    width: "50%",
    padding: "0 0.625rem",
    textAlign: "right",
  }),

  totalContainer: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.625rem",
  }),

  total: style({
    width: "100%",
    textAlign: "right",
  }),

  deleteIcon: style({
    position: "absolute",
    top: "0.1875rem",
    right: "0.3125rem",
    stroke: "red",
  }),
};

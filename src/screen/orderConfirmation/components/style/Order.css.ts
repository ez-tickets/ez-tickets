import { style } from "@vanilla-extract/css";

export const orderStyle = {
  order: style({
    position: "relative",
    width: "100%",
    marginBottom: "30px",
    padding: "10px",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "5px",
    boxShadow: "5px 3px 10px rgba(0,0,0,0.4)",
  }),

  orderProduct: style({
    position: "relative",
    width: "100%",
    padding: "0 10px",
  }),

  productName: style({
    fontSize: "20px",
  }),

  productAmount: style({
    position: "absolute",
    top: "80%",
    right: "2%",
  }),

  productPrice: style({
    fontSize: "12px",
    padding: "0 10px 5px 10px",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
  }),

  totalContainer: style({
    textAlign: "right",
    padding: "15px 2px 10px 5px",
  }),

  totalPrice: style({
    marginRight: "20px",
  }),

  deleteIcon: style({
    position: "absolute",
    top: "3px",
    right: "5px",
    stroke: "red",
  }),
};

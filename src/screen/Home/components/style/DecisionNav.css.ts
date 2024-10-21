import { style } from "@vanilla-extract/css";

export const decisionNavStyle = {
  footer: style({
    backgroundColor: "white",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    zIndex: 1,
    boxShadow: "0 -1px 2px gray",
  }),

  existButton: style({
    width: "100%",
    backgroundColor: "gold",
    borderRadius: "2.5px",
    padding: "10px 20px",
    border: "1px solid rgba(0,0,0,0.2)",
  }),

  emptyButton: style({
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: "2.5px",
    padding: "10px 20px",
    border: "1px solid rgba(0,0,0,0.2)",
  }),

  buttonContainer: style({
    position: "relative",
  }),

  orderQuantity: style({
    position: "absolute",
    width: "30px",
    height: "30px",
    border: "1px solid white",
    boxShadow: "-2px -2px 4px rgba(0,0,0,0.2)",
    borderRadius: "50%",
    top: "-30%",
    right: "-2%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "crimson",
    color: "white",
  }),
};

import { style } from "@vanilla-extract/css";

export const orderButtonsStyle = {
  buttonContainer: style({
    width: "100%",
    height: "50%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  }),

  orderLinkContainer: style({
    position: "relative",
    width: "45%",
    padding: "0.625rem 1.25rem",
    backgroundColor: "gold",
    borderRadius: "5px",
    boxShadow: "0 0.0625rem 0.125rem gray",
  }),

  orderLink: style({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),

  quantity: style({
    position: "absolute",
    right: "3%",
    top: "5%",
    transform: "translate(50%, -50%)",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "crimson",
    border: "1px solid white",
    borderRadius: "50%",
    boxShadow: "-2px -2px 4px rgba(0,0,0,0.2)",
  }),

  addLink: style({
    width: "45%",
    backgroundColor: "gold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.625rem 1.25rem",
    borderRadius: "5px",
    boxShadow: "0 0.0625rem 0.125rem gray",
  }),
};

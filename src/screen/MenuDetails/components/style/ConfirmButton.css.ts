import { style } from "@vanilla-extract/css";

export const confirmButtonStyle = {
  buttonContainer: style({
    position: "relative",
  }),

  actionButton: style({
    width: "150px",
    backgroundColor: "gold",
    borderRadius: "2.5px",
    padding: "10px",
    border: "1px solid rgba(0,0,0,0.2)",
  }),

  orderQuantity: style({
    position: "absolute",
    width: "30px",
    height: "30px",
    border: "1px solid white",
    boxShadow: "-2px -2px 4px rgba(0,0,0,0.2)",
    borderRadius: "50%",
    top: "-30%",
    right: "-5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "crimson",
    color: "white",
  }),
};

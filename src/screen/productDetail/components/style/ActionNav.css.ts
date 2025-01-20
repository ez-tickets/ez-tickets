import { style } from "@vanilla-extract/css";

export const actionNavStyle = {
  actionNav: style({
    width: "100%",
    height: "100%",
    padding: "0.8rem",
  }),

  buttonContainer: style({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),

  orderQuantity: style({
    position: "absolute",
    top: "-25%",
    left: "40%",
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
};

import { style } from "@vanilla-extract/css";

export const actionBarStyle = {
  container: style({
    width: "100%",
    paddingTop: "1.35rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),

  orderQuantity: style({
    position: "absolute",
    top: "10%",
    right: "7%",
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

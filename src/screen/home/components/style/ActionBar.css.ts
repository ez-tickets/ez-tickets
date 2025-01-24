import { style } from "@vanilla-extract/css";

export const actionBarStyle = {
  container: style({
    position: "relative",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),

  link: style({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gold",
    padding: "0.625rem 1.25rem",
    borderRadius: "0.3125rem",
    boxShadow: "0 0.0625rem 0.125rem gray",
  }),

  quantity: style({
    position: "absolute",
    top: 0,
    right: 0,
    transform: "translate(50%, -50%)",
    width: "1.875rem",
    height: "1.875rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "crimson",
    border: "0.0625rem solid white",
    borderRadius: "50%",
    boxShadow: "-0.125rem -0.125rem 0.25rem rgba(0,0,0,0.2)",
  }),
};

import { style } from "@vanilla-extract/css";

export const buttonStyle = {
  emptyButton: style({
    width: "90%",
    padding: "0.625rem 1.25rem",
    backgroundColor: "rgba(0,0,0,0.2)",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "0.3125rem",
  }),

  confirmButton: style({
    width: "100%",
    padding: "0.625rem 1.25rem",
    backgroundColor: "gold",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "0.3125rem",
  }),

  yesButton: style({
    width: "9.375rem",
    padding: "0.3125rem",
    margin: "0 0.3125rem",
    backgroundColor: "gold",
    borderRadius: "0.3125rem",
    boxShadow: "0 0.0625rem 0.125rem gray",
  }),

  noButton: style({
    width: "9.375rem",
    padding: "0.3125rem",
    margin: "0 0.3125rem",
    backgroundColor: "white",
    borderRadius: "0.3125rem",
    boxShadow: "0 0.0625rem 0.125rem gray",
  }),
};

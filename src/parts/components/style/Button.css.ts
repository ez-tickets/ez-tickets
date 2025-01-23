import { style } from "@vanilla-extract/css";

export const buttonStyle = {
  emptyButton: style({
    width: "90%",
    padding: "10px 20px",
    backgroundColor: "rgba(0,0,0,0.2)",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "5px",
  }),

  confirmButton: style({
    width: "100%",
    padding: "10px 20px",
    backgroundColor: "gold",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "5px",
  }),

  yesButton: style({
    width: "150px",
    padding: "5px",
    margin: "0 5px",
    backgroundColor: "gold",
    borderRadius: "5px",
    boxShadow: "0 1px 2px gray",
  }),

  noButton: style({
    width: "150px",
    padding: "5px",
    margin: "0 5px",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0 1px 2px gray",
  }),
};

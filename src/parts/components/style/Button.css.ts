import { style } from "@vanilla-extract/css";

export const buttonStyle = {
  existButton: style({
    display: "block",
    width: "300px",
    backgroundColor: "gold",
    borderRadius: "2.5px",
    padding: "10px 10px",
    border: "1px solid rgba(0,0,0,0.2)",
  }),

  emptyButton: style({
    display: "block",
    width: "300px",
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: "2.5px",
    padding: "10px 20px",
    border: "1px solid rgba(0,0,0,0.2)",
  }),

  actionButton: style({
    width: "150px",
    padding: "10px",
    margin: "0 16px",
    backgroundColor: "gold",
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "5px",
  }),
};

import { style } from "@vanilla-extract/css";

export const decisionNavStyle = {
  footer: style({
    // backgroundColor: "#ffd700", //カートの中に商品が入っている時の色
    backgroundColor: "lightgray", //注文の品がない時の色
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    zIndex: 1,
    boxShadow: "0 -1px 2px gray",
  }),

  decisionButton: style({
    color: "rgba(0,0,0,0.5)",
  }),
};

import { style } from "@vanilla-extract/css";

export const optionStyle = {
  orderOption: style({
    width: "100%",
  }),

  optionList: style({
    position: "relative",
    padding: "5px 10px",
    color: "rgba(0,0,0,0.5)",
    fontSize: "12px",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    listStyle: "none",
  }),

  optionPrice: style({
    position: "absolute",
    top: "50%",
    right: "8%",
  }),
};

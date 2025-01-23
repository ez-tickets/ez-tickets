import { style } from "@vanilla-extract/css";

export const contentsStyle = {
  homeFrame: style({
    position: "absolute",
    top: "7%",
    left: 0,
    width: "100%",
    height: "82svh",
    overflowY: "scroll",
    padding: "10px",

    // backgroundColor: "red"
  }),

  detailFrame: style({
    position: "absolute",
    top: "7%",
    left: 0,
    width: "100%",
    height: "78svh",
    overflowY: "scroll",
    padding: "10px",

    // backgroundColor: "red"
  }),

  confirmFrame: style({
    position: "absolute",
    top: "7%",
    left: 0,
    width: "100%",
    height: "78svh",
    overflowY: "scroll",
    padding: "10px",

    // backgroundColor: "red"
  }),
};

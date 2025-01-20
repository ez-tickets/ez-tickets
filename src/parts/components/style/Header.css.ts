import { style } from "@vanilla-extract/css";

export const headerStyle = {
  homeFrame: style({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    maxHeight: "7svh",
    boxShadow: "1px 2px 2px rgba(0,0,0,0.4)",
    overflowX: "scroll",

    // backgroundColor: "gold"
  }),

  detailFrame: style({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    maxHeight: "7%",
    boxShadow: "1px 2px 2px rgba(0,0,0,0.4)",
    overflowX: "scroll",

    // backgroundColor: "yellow"
  }),
};

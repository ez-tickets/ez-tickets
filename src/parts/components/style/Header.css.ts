import { style } from "@vanilla-extract/css";

export const headerStyle = {
  homeFrame: style({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "7svh",
    boxShadow: "1px 2px 2px rgba(0,0,0,0.4)",
    zIndex: 100,
  }),

  detailFrame: style({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "7svh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "1px 2px 2px rgba(0,0,0,0.4)",
    zIndex: 100,

    // backgroundColor: "yellow"
  }),

  confirmFrame: style({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "7svh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "1px 2px 2px rgba(0,0,0,0.4)",
    overflowX: "scroll",
    zIndex: 100,

    // backgroundColor: "yellow"
  }),
};

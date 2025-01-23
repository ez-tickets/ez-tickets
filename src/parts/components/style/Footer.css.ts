import { style } from "@vanilla-extract/css";

export const footerStyle = {
  homeFrame: style({
    position: "absolute",
    top: "89%",
    left: 0,
    width: "100%",
    height: "11svh",
    boxShadow: "1px -2px 2px rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,

    // backgroundColor: "skyblue"
  }),

  detailFrame: style({
    position: "absolute",
    top: "85%",
    left: 0,
    width: "100%",
    height: "15svh",
    boxShadow: "1px -2px 2px rgba(0,0,0,0.4)",
    zIndex: 100,

    // backgroundColor: "skyblue"
  }),

  confirmFrame: style({
    position: "absolute",
    top: "85%",
    left: 0,
    width: "100%",
    height: "15svh",
    boxShadow: "1px -2px 2px rgba(0,0,0,0.4)",
    zIndex: 100,

    // backgroundColor: "skyblue"
  }),
};
